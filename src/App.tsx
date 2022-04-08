import useHangman from './hooks/useHangman';
import Game from './pages/Game';
import Start from './pages/Start';

function App() {
  const game = useHangman();
  return (
    <div className='App'>
      {game.status === "created" && <Start handleStart={game.handleStart}/>}

      {game.status === "started" && <Game />} 
    </div>
  );
}

export default App;
