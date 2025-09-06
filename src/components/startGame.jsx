import '../styles/startGame.css'

function StartGame({updateGameStatus}){
    return (
        <div className="startMenu">
            <button onClick={updateGameStatus}>Start Game</button>
        </div>
    )
}

export default StartGame