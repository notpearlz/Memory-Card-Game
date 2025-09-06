import { useState, useEffect } from 'react'
import cardData  from './cardData'

import '../styles/game.css'

function Game(){
    const apiKey = import.meta.env.VITE_APIKEY
    const [cards, setCards] = useState(cardData)
    const [seenCards, setSeenCards] = useState(new Set())

    useEffect(()=>{
        const getGifs = (async () => {
            try{
                var newCards = [...cards];
                for(let i = 0; i < cards.length; i++){
                    const card = newCards[i]
                    if(!card.url){
                        const response = await fetch(`https://api.giphy.com/v1/gifs/translate?api_key=${apiKey}&s=${card.val}`, {mode: 'cors'})
                        const gifData = await response.json()
                        card.url = gifData.data.images.original.url;
                    }

                }
                setCards(newCards)
            }
            catch (error) {
                console.log("ERRORERRORERRORERRORERRORERRORERRORERRORERRORERRORERRORERRORERRORERRORERROR", error)
            }

        })();
    },[])

    

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
                return <div  key={"div-" + card.val}>
                    <img onClick={clickCard} className='card' src={card.url} data-id={card.id} key={card.id}/>
                    </div>
            })}
 
        </main>
    )
}

export default Game