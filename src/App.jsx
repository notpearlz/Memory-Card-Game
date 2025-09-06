import { useEffect, useState } from 'react'

import Header from './components/header'
import StartGame from './components/startGame'
import Game from './components/game'
import Footer from './components/footer'

import './App.css'



function App() {
  const [currentScore, setCurrenstScore] = useState(0);
  const [topScore, setTopScore] = useState(0);

  const [gameStatus, setGameStatus] = useState('Start');


  useEffect(()=>{
    if(currentScore >= topScore){
      setTopScore(currentScore);
    }
  }, [currentScore])
  function addScore(){
    setCurrenstScore(currentScore+1);

  }
  function resetScore(){

    setCurrenstScore(0);
  }
  
  function updateGameStatus(){
    if(gameStatus == 'Start'){
      setGameStatus('Game');
    } else if (gameStatus == 'Game'){

    }
  }
  


  return (
    <div className='app'>
      <Header currentScore={currentScore} topScore={topScore}/>


      {gameStatus == 'Start' && <StartGame updateGameStatus={updateGameStatus}/>}
      {gameStatus == 'Game' && <Game addScore={addScore} resetScore={resetScore} />}

      <Footer />
    </div>
  )
}

export default App
