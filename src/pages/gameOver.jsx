import '../styles/gameOver.css'
import {motion} from "framer-motion"
function GameOver(
    {
        restartGame,
        gameState,
    }
){
    return(
        <>
            
            <div className="overlay">
            </div>
            <div 
                className={"resultPage " + gameState}
                >
                    <div className={"resultText "}>
                        {"You " + gameState}
                        {/* {defeat ? "You Lose": "You Win"} */}
                    </div>
                    <motion.button
                        className='resultRestart'
                        onClick={() => {
                            restartGame()
                        }}
                        whileHover={{scale: 1.1}}>
                        Restart
                    </motion.button>
            </div>
        </>
    )
}

export default GameOver