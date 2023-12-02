import "/src/styles/startPage.css";
import {motion} from "framer-motion"
function StartPage({
    setStart ,
    setDifficulty
}){
    function handleDifficulty(e){
        console.log()
        if(e.currentTarget.classList[0] === "easy"){
            setDifficulty([8,4])
        }
        else if(e.currentTarget.classList[0] === "medium"){
            setDifficulty([8,4])
        }
        else{
            setDifficulty([8,4])
        }
        setStart(true)
    }
    return(
        <div className="startPage">
            <img src="./src/assets/One_Piece_Logo.png" alt="logo" width="500px" height="auto"
            />
            <h1 className="gameTitle">Memory G<span>a</span>me</h1>
            <div className="difficulty">
                <motion.button
                    className="easy diff" 
                    onClick={handleDifficulty}
                    whileHover={{
                        scale: 1.1
                    }}>
                        Easy
                </motion.button>
                <motion.button 
                    className="medium diff" 
                    onClick={handleDifficulty}
                    whileHover={{
                        scale: 1.1
                    }}>
                        Medium
                </motion.button>
                <motion.button 
                    className="hard diff" 
                    onClick={handleDifficulty}
                    whileHover={{
                        scale: 1.1
                    }}
                    transition={{
                        layout: {
                            duration: 1,
                            type: "spring"
                        }
                    }}>
                    
                        Hard
                </motion.button>
            </div>
        </div>
    )
}

export default StartPage