import React, {useState} from 'react'
import Square from './Square';

const Board = () => {
  const [squares, setSquares] = useState(Array(9).fill(null));
  const [currentPlayer, setCurrentPlayer] = useState<'X' | 'O'>(
    Math.floor(Math.random() * 2) === 1 ? 'X' : 'O'
  )
    const [winner, setWinner] = useState(null)
    const setSquareValue = (index) => {
      const newVal = squares.map((val,i) => {
        if(i == index){
          return currentPlayer
        }
        return val
      });
      setSquares(newVal)
      setCurrentPlayer(currentPlayer === 'X' ? 'O' : 'X')
    }

  return (
    <>
    <p>Hey {currentPlayer}</p>
    {Array(9).fill(null).map((_, i) => {
      return <Square
        key={i}
        winner={winner}
        onClick = {() => setSquareValue(i)}
        value={squares[i]}
      />
    })}
    <div>Board</div>
    </>
  )
}

export default Board