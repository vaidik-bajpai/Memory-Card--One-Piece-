import { useState } from 'react'

import './App.css'
import Card from './component/card.jsx'
import Title from './component/title'
import Foot from './component/footer'
import StartPage from './pages/startpage'
import GamePage from './pages/gamepage'
import characters from './characters'
import GameOver from './pages/gameOver.jsx'

function App() {
    const [bestScore, setBestScore] = useState(0)
    const [score, setScore] = useState(0)
    const [playSound, setPlaySound] = useState(true)
    const [playMusic, setPlayMusic] = useState(false)
    const [charactersToPlayWith, setCharactersToPlayWith] = useState([])
    const [charactersToDisplay, setCharactersToDisplay] = useState([])
    const [difficulty, setDifficulty] = useState([])
    const [start, setStart] = useState(false)
    const [roundResult, setRoundResult] = useState('')

    function goBackToStartPage(){
      console.log("goBackToStartPage")
      setDifficulty([])
      setStart(false)
    }
    function handleClick(){
      console.log("clicked")
    }
    const getCharactersToPlayWith = () => {
      let randomCharacters = [];
  
      while(randomCharacters.length < 6) {
        const randNum = Math.floor(Math.random() * 8);
        if(!randomCharacters.includes(characters[randNum])) {
          randomCharacters.push(characters[randNum]);
        }
      }
  
      setCharactersToPlayWith(randomCharacters);
      getCharactersToDisplay(randomCharacters);
    };
  
    const getCharactersToDisplay = (array) => {
      /* console.log('entered') */
      if(score+1 === array.length){ 
        setWin(true)
        return;
      }
      let shuffledCharacters = [];
      let clicked = 0;
  
      while(shuffledCharacters.length < 4) {
        const randNum = Math.floor(Math.random() * array.length);
        const character = array[randNum];
        if(!shuffledCharacters.includes(character)
          && (clicked < 3 || !character.clicked)) {
          shuffledCharacters.push(character);
          clicked = clicked+character.clicked
          console.log(character.name, clicked)
        }
      }
      setCharactersToDisplay(shuffledCharacters);
      /* console.log('exit') */
    };
  
    return (
      /* win ? (<>
          <h1>Won</h1>
      </>) :
      defeat ? (<>
          <h1>Defeated</h1>
      </>) : 
      start ? (<>
          <GamePage
              charactersToPlayWith={charactersToPlayWith}
              getCharactersToPlayWith={getCharactersToPlayWith}
              charactersToDisplay={charactersToDisplay}
              setCharactersToDisplay={setCharactersToDisplay}
              getCharactersToDisplay={getCharactersToDisplay}
              setCharactersToPlayWith={setCharactersToPlayWith}
              score={score}
              setScore={setScore}
              setBestScore={setBestScore}
              bestScore={bestScore}
              handleClick={handleClick}
              goBackToStartPage={goBackToStartPage}
              setDefeat={setDefeat}
              />
          <Foot 
              playSound={playSound}
              setPlaySound={setPlaySound}
              playMusic={playMusic}
              setPlayMusic={setPlayMusic}
              getCharactersToDisplay={getCharactersToDisplay}/>
        </>
    ) : (
      <StartPage setStart={setStart} setDifficulty={setDifficulty}/>
    ) */
    <GameOver />
  )
}

export default App
