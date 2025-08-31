import { useState } from 'react'

import Header from './components/header'
import StartGame from './components/startGame'
import Game from './components/game'
import Footer from './components/footer'

import './App.css'



function App() {
  const [gameStatus, setGameStatus] = useState('Start')

  function updateGameStatus(){
    if(gameStatus == 'Start'){
      setGameStatus('Game')
    } else if (gameStatus == 'Game'){

    }
  }
  


  return (
    <div class='app'>
      <Header />

      {gameStatus == 'Start' && <StartGame />}
      {gameStatus == 'Game' && <Game />}
      <Footer />
    </div>
  )
}

export default App
