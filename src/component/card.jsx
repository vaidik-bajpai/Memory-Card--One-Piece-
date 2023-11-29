function Card({character, handleClick, setScore, charactersToPlayWith, setCharacterstoDisplay, getCharactersToDisplay, setDefeat}){
    function handleClick(){
        if(!character.clicked){
            console.log(character, charactersToPlayWith.length)
            character.clicked = true
            setScore(score => score+1);
            getCharactersToDisplay(charactersToPlayWith)
        }
        else{
            console.log("defeat");

            setDefeat(true);
        }
    }
    return(
        <div
            className={"Card " + character.name}
            onClick={handleClick}>
            <div
                style={{
                    width: "180px",
                    height: "100%",
                    backgroundImage: `url(${character.src})`,
                    backgroundSize: "cover"
                }}>
            </div>
        </div>
    )
}

export default Card