import Title from "../component/title"
import Card from "../component/card"
import characters from "../characters"
import { useState, useEffect } from "react";  

function GamePage({
    charactersToPlayWith,
    getCharactersToPlayWith,
    setCharactersToPlayWith,
    charactersToDisplay,
    getCharactersToDisplay,
    goBackToStartPage,
    score,
    setScore,
    setBestScore,
    bestScore,
    handleClick,
    setCharactersToDisplay,
}){
    useEffect(() => {
        console.log('start');
        getCharactersToPlayWith();

        return () => {
            setCharactersToPlayWith([]);
            setScore(0);
            setBestScore(0);
            charactersToPlayWith.forEach(character => {
                character.clicked = false;
            });
        }
    }, []);

    return(
        <>
            <Title 
                goBackToStartPage={goBackToStartPage}
                score={score}
                setScore={setScore}
                bestScore={bestScore}
                setBestScore={setBestScore}/>


            <div 
                className="Cards"
                height="100%">
                {charactersToDisplay.map(character => {
                    return(
                        <Card character={character} charactersToPlayWith={charactersToPlayWith} setCharactersToDisplay={setCharactersToDisplay} key={character.id} handleClick={handleClick} setScore={setScore} getCharactersToDisplay={getCharactersToDisplay}/>
                    )
                })}
            </div>
        </>
      
    )
}

export default GamePage