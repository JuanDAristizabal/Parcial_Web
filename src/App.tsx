import useHangman from './hooks/useHangman';
import Game from './pages/Game';
import Start from './pages/Start';
import './App.css'
import { useState } from 'react';

const words = ['application', 'programming', 'interface', 'wizard'];
let selectedWord = words[Math.floor(Math.random() * words.length)];

function App() {
  const [correctLetters, setCorrectLetters] = useState("");
  const [wrongLetters, setWrongLetters] = useState([""]);

  const game = useHangman();
  return (
    <div className='App'>
      {game.status === "created" && <Start handleStart={game.handleStart}/>}

      {game.status === "started" && 
      <Game selectedWord={selectedWord} correctLetters={correctLetters} wrongLetters={wrongLetters} />} 
    </div>
  );
}

export default App;
