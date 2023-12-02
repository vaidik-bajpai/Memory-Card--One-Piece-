import Title from "../component/title"
import Card from "../component/card"
import characters from "../characters"
import { useState, useEffect } from "react";  
import GameOver from "./gameOver";
import {motion, AnimatePresence} from "framer-motion"


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
    gameState,
    setGameState,
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

    function restartGame(){
        setGameState('');
        charactersToPlayWith.forEach(character => {
            character.clicked = false
        })
        setScore(0)
        getCharactersToPlayWith()
    }

    return(
        <>
            <Title 
                goBackToStartPage={goBackToStartPage}
                score={score}
                setScore={setScore}
                bestScore={bestScore}
                setBestScore={setBestScore}
                setGameState={setGameState}/>
                

            <div 
                className="Cards"
                height="100%">
                {charactersToDisplay.map(character => {
                    return(
                        <Card   
                        character={character}
                        handleClick={handleClick}/>
                    )
                })}
            </div>

            <AnimatePresence>
                {
                    gameState !== '' && 
                        <GameOver 
                            restartGame={restartGame}
                            gameState={gameState}
                        />   
                }
            </AnimatePresence>
        </>
      
    )
}

export default GamePage