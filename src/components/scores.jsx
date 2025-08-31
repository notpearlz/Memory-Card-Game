function TopScore({topScore}){
    return (
        <div>
            <p>Top Score {topScore}</p>
        </div>
    )
}

function CurrentScore({currentScore}){
    return (
        <div>
            <p>Current Score: {currentScore}</p>
        </div>
    )
}


function Scores({currentScore, topScore }){
    return (
        <div>
            <CurrentScore currentScore={currentScore}/>
            <TopScore topScore={topScore}/>
        </div>
    )
}

export default Scores