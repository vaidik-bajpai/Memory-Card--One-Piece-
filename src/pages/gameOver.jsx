import '../styles/gameOver.css'
function GameOver(){
    return(
        <>
            <div className="resultPage">
                <div>
                    "You Lose"
                    {/* {defeat ? "You Lose": "You Win"} */}
                </div>
                <button
                    /* onClick={() => {
                        restart()
                    }} */>
                    Restart
                </button>
            </div>
            <div className="gameOver">
            </div>
        </>
    )
}

export default GameOver