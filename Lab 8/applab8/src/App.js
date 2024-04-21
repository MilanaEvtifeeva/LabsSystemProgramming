import './App.css';
import ReTimer from './Components/ReTimer';
import TimerBtn from './Components/TimerBtn';
import SimpleNum from './Components/SimpleNum';
import TrafficLight from './Components/TrafficLight';
function App() {
  return (
    <div className="App">
      <div>
        <h2>Task1</h2>
        <ReTimer/>
      </div>
     <div>
        <h2> Task2</h2>
        <TimerBtn/>
     </div>
     <div>
        <h2> Task3</h2>
        <SimpleNum  />
     </div>
     <div>
        <h2> Task4</h2>
        <TrafficLight  />
     </div>
    </div>
  );
}

export default App;
