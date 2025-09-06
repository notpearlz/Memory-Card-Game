import Scores from './scores'

import '../styles/header.css'

function Header({currentScore, topScore}){
    return (
        <header>
            <h1>Memory Card Game</h1>

            <Scores currentScore={currentScore} topScore={topScore}/>
        </header>
    )
}

export default Header