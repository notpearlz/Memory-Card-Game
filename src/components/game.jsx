import { useState, useEffect } from 'react'
import cardData  from './cardData'

import '../styles/game.css'

function Game({addScore, resetScore}){
    const apiKey = import.meta.env.VITE_APIKEY
    const [isLoading, setLoading] = useState(true)
    const [cards, setCards] = useState(cardData)
    const [seenCards, setSeenCards] = useState(new Set())

    useEffect(()=>{
        const getGifs = (async () => {
            try{
                var newCards = [...cards];
                for(let i = 0; i < cards.length; i++){
                    const card = newCards[i]
                    if(!card.url){
                        const response = await fetch(`https://api.api-ninjas.com/v1/randomimage`, {
                            mode: 'cors',
                            headers: {
                                'X-Api-Key': apiKey,
                                'Accept': 'image/jpg'

                            },
                        })
                        .then(response => response.blob())
                        .then(blob => {
                            const data = URL.createObjectURL(blob);
                            card.url = data;

                        })
                    }

                }
                setCards(newCards)
                setLoading(false);
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

        //Set scores and shuffle cards
        if(!seen){
            shuffle();
            addScore();
        } else { 
            // reset scores and reset cards
            setSeenCards(new Set());
            resetScore();
            shuffle();

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
        <>
            {!isLoading && <div className='game'>
            
                {cards.map((card,index)=> {
                    return <div  className='card-container' key={"div-" + card.val}>
                        <img onClick={clickCard} className='card' src={card.url} data-id={card.id} key={card.id}/>
                        </div>
                })}
    
            </div>}
            {isLoading && <h1>Loading...</h1>}
        </>
    )
}

export default Game