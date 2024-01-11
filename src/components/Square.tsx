import React from 'react'

type Player = 'X' | 'O' | null

const Square = ({winner, value, onClick}
    :{
        winner: Player
        value: Player
        onClick: () => void
    }) => {
    if(!value){
        return <button onClick={onClick} disabled={Boolean(winner)}/>
    }
  return (
    <button disabled>{value}</button>
  )
}

export default Square