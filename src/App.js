
import './App.css';
// import Home from './Component/Home';
import SimpleMap from './Component/SampleMap';
import DigitalClock from './DigitalClock';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <DigitalClock />

      <SimpleMap />
      {/* < Home /> */}


      </header>
    </div>
  );
}

export default App;
