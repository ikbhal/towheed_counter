import logo from './logo.svg';
import './App.css';
import {useState} from 'react';

function App() {

  var [number, SetNumber] = useState(0);

  const incr = ()=>{
    SetNumber(c =>c+1)
  };

  const decr = ()=>{
    SetNumber(c => c-1);
  }

  const reset = () => {
    SetNumber(0);
  }
  return (
    <div className="App">
    
    <h1>Towheed</h1>
    <p>Tawakal, Taqwa , Tavazo</p>

    <h2>Count {number}</h2>
    <button onClick={incr}>+</button>
    <button onClick={decr}>-</button>
    <button onClick={reset}>0</button>
    </div>
  );
}

export default App;
