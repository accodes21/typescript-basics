import {useEffect, useState} from 'react'
import Square from './Square';
type Player = "X" | "O" | "DRAW" | null;

const calculateWinner = (squares: Player[]) => {
  const lines = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
  ]

  for(let i = 0; i < lines.length; i++){
    const [a,b,c] = lines[i]
    if(
      squares[a] && 
      squares[a] === squares[b] &&
      squares[a] === squares[c]
    ){
      return squares[a]
    }
  }
  return null
}

const Board = () => {
  const [squares, setSquares] = useState(Array(9).fill(null));
  const [currentPlayer, setCurrentPlayer] = useState<'X' | 'O'>(
    Math.floor(Math.random() * 2) === 1 ? 'X' : 'O'
  )
    const [winner, setWinner] = useState<Player>(null)
    const setSquareValue = (index: number) => {
      const newVal = squares.map((val,i) => {
        if(i == index){
          return currentPlayer
        }
        return val
      });
      setSquares(newVal)
      setCurrentPlayer(currentPlayer === 'X' ? 'O' : 'X')
    }

    const reset = () => {
      setSquares(Array(9).fill(null))
      setWinner(null)
      setCurrentPlayer(Math.floor(Math.random() * 2) === 1 ? 'X' : 'O')
    }

    useEffect(() => {
      const w = calculateWinner(squares)
      if(w){
        setWinner(w)
      }

      if(!w && !squares.filter((square) => !square).length){
        setWinner("DRAW")
      }
    },[squares])

  return (
    <>
    {!winner && <p>Hey {currentPlayer}, it's your turn</p>}
    <br />
    {winner && winner!=='DRAW' && <p>Congratulations, {winner} wins!</p>}
    {winner && winner === 'DRAW' && <p>Congratulations, it's a DRAW!</p>}
    <br />
    <div className='grid'>
      {Array(9).fill(null).map((_, i) => {
        return <Square
          key={i}
          winner={winner}
          onClick = {() => setSquareValue(i)}
          value={squares[i]}
        />
      })}
    </div>
    <div className='reset-div'>
      <button className='reset' onClick={reset}>RESET</button>
    </div>
    </>
  )
}

export default Board