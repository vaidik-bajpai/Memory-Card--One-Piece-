import './App.css'
import Card from './component/card.jsx'
import Title from './component/title'

function App() {

  return (
    <>
      <Title />
      <div className="Cards">
        <Card character="Katakuri"/>
        <Card character="Sabo"/>
        <Card character="Trafalgarlaw"/>
        <Card character="Whitebeard"/>
      </div>
      {/* <div class="tenor-gif-embed" data-postid="24433199" data-share-method="host" data-aspect-ratio="1.77778" data-width="100%"><a href="https://tenor.com/view/one-piece-opening-monkey-d-luffy-roronoa-zoro-sanji-gif-24433199">One Piece Opening GIF</a>from <a href="https://tenor.com/search/one+piece-gifs">One Piece GIFs</a></div> <script type="text/javascript" async src="https://tenor.com/embed.js"></script> */}
    </>
  )
}

export default App
