import {motion} from 'framer-motion'
function Foot({
    playSound,
    setPlaySound,
    playMusic,
    setPlayMusic,
    getCharactersToDisplay,
}){
    function toggleMusic(){
        playMusic ? setPlayMusic(false) : setPlayMusic(true)
    }
    function toggleSound(){
        playSound ? setPlaySound(false) : setPlaySound(true)
    }
    return(
        <div className="footer">
            <div className="soundAndMusic">
                <motion.button whileHover={{scale: 1.1}} className="sound" onClick={toggleMusic}></motion.button>
                <motion.button whileHover={{scale: 1.1}} className="music" onClick={toggleSound}></motion.button>
            </div>
            <motion.button whileHover={{scale: 1.1}} className="rules" onClick={getCharactersToDisplay}></motion.button>
        </div>
    )
}

export default Foot;