import React from 'react'

type Player = "X" | "O" | "DRAW" | null;

const Square = ({winner, value, onClick}
    :{
        winner: Player
        value: Player
        onClick: () => void
    }) => {
    if(!value){
        return <button className='square' onClick={onClick} disabled={Boolean(winner)}/>
    }
  return (
    <button className={`square square_${value.toLocaleLowerCase()}`} disabled>{value}</button>
  )
}

export default Square