import useHangman from './hooks/useHangman';
import Game from './pages/Game';
import Start from './pages/Start';
import './App.css'

function App() {
  const game = useHangman();
  return (
    <div className='App'>
      {game.status === "created" && <Start handleStart={game.handleStart}/>}

      {game.status === "started" && <Game handleStart={game.handleStart}/>} 
    </div>
  );
}

export default App;
