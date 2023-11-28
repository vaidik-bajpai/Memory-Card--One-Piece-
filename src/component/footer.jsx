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
                <button className="sound" onClick={toggleMusic}></button>
                <button className="music" onClick={toggleSound}></button>
            </div>
            <button className="rules" onClick={getCharactersToDisplay}></button>
        </div>
    )
}

export default Foot;