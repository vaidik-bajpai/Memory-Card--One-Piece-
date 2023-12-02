import {motion} from 'framer-motion';

function Title({
    goBackToStartPage,
    score,
    setScore,
    bestScore,
    setBestScore,
    playClickSound,
    setGameState,
}){
    return(
        <div
            className="Title"
            style={{
                height: "125px",
                marginBottom: "30px",
            }}>
            <motion.div whileHover={{scale: 1.1}}>
                <img onClick={goBackToStartPage} src="./src/assets/One_Piece_Logo.png" alt="logo" height="100%" width="auto"
                />
            </motion.div>
            <div
                className="score"
                style={{
                    padding: "0px 20px"
                }}>
                <div className="currentScore">Score: {score}</div>
                <div className="bestScore">Best Score: {bestScore}</div>
            </div>
        </div>
    )
}

export default Title