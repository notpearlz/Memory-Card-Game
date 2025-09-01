import { useState, useEffect } from 'react'
import cardData  from './cardData'

import '../styles/game.css'

function Game(){
    const [cards, setCards] = useState(cardData)
    const [seenCards, setSeenCards] = useState(new Set())


    function clickCard(card){
        const cardId = card.target.dataset.id
        var seen = false;
        cards.map((x)=>{
            if(x.id == cardId){
                if(seenCards.has(cardId)){
                    seen = true;
                    return;
                } else {
                    setSeenCards(new Set([...seenCards, cardId]))
                }
            }
        })

        if(!seen){
            shuffle();
        } else {

        }
    }

 
    function shuffle() {
        let tempArr = [...cards];
        let currentIndex = 0;


        // While there remain elements to shuffle...
        while (currentIndex != tempArr.length-1) {
            // Pick a remaining element...
            let randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex++;

            // And swap it with the current element.
            [tempArr[currentIndex], tempArr[randomIndex]] = [
            tempArr[randomIndex], tempArr[currentIndex]];
        }

        setCards(tempArr)
    }

    return (
        <main>
        
        {cards.map((card,index)=> {
                return <button onClick={clickCard} className='card' data-id={card.id} key={card.id}>{card.val}</button>
            })}
 
        </main>
    )
}

export default Game