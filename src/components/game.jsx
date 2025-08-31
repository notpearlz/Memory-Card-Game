import { useState, useEffect } from 'react'

import '../styles/game.css'

function Game(){
    const [cards, setCards] = useState([])


    useEffect(()=>{
        setCards(Array(16).fill(null))
    }, [])

    return (
        <main>
        
        {cards.map((val,index)=> {
            return <button className='card' key={index}>Card{index}</button>
        })}
 
        </main>
    )
}

export default Game