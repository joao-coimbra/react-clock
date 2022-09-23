import { useState } from 'react';
import './App.css';
import AnalogClock from './Clock/Analog';
import DigitalWatch from './Clock/Digital';

function App() {

  const [type, setType] = useState('analog');

  return (
    <div className="App">
      <header className="App-header">
        <button
          onClick={() => setType(type === 'analog' ? 'digital' : 'analog')}
        >{type}</button>
        {type === 'analog'
          ? <AnalogClock />
          : <DigitalWatch /> 
        }
      </header>
    </div>
  );
}

export default App;
