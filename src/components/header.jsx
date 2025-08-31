import Scores from './scores'

import '../styles/header.css'

function Header({currentScore, topScore}){
    return (
        <header>
            <h1>Header</h1>

            <Scores currentScore={currentScore} topScore={topScore}/>
        </header>
    )
}

export default Header