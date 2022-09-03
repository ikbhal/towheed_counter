import logo from './logo.svg';
import './App.css';
import {useState} from 'react';

function App() {

  var [count, SetCount] = useState(0);
  return (
    <div className="App">
    
    <h1>Towheed</h1>
    <p>Tawakal, Taqwa , Tavazo</p>

    <h2>Count {count}</h2>
    <button onClick={e=>setCount(c => c+1)}>+</button>
    <button onClick={e=>setCount(c => c-1)}>-</button>
    <button onClick={e=>setCount(0)}>0</button>
    </div>
  );
}

export default App;
