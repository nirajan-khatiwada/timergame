import Player from './components/Player.jsx';
import TimerChallange from './components/TimerChallange.jsx';
function App() {
  return (
    <>
      <Player />
      <div id="challenges">
        <TimerChallange title="Easy" targetTime={1}/>
        <TimerChallange title="NotEasy" targetTime={2}/>
        <TimerChallange title="NotEasy" targetTime={10}/>
        <TimerChallange title="NotEasy" targetTime={15}/>
      </div>
    </>
  );
}

export default App;
