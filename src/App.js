import logo from './logo.svg';
import './App.css';
import {useState} from 'react';
import { useEffect } from 'react';

function StopWatch(){

  var [h, seth] = useState(0);
  var [m, setm] = useState(0);
  var [s, sets] = useState(0);
  var [n, setn] = useState(0);

  useEffect(() =>{
    var interval = setInterval( () =>{
      setn(n=> {

        var temp = n+1;
        var ts = n%60;
        sets(ts);
        var tm = Math.floor(n/60%60);
        setm(tm);
        var th = Math.floor(n/3600);
        seth(th);
        return n+1;
      });
    },1000);

    return () => {
      clearInterval(interval);
    }
  });

  return (

    <div className="stop-watch">
      <span >{h}</span>: <span> {m}</span>:<span>{s}</span>
    </div>
  );
}

function CountDown({number}) {

  var [num, setNum] = useState(number);
   useEffect(() => {
    var interval = setInterval(()=>{
      setNum(n=> n-1);
    },500);

    return () =>{
      clearInterval(interval);
    }
  })
  return (
    <div className="count-down">
      start with {number}<br/>
      Count down: {num}
    </div>
  );
}

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

    <hr/>

    <StopWatch/>
    <hr/>
    <CountDown number={10}/> <br/>

    <CountDown number={100}/>
    </div>


  );
}

export default App;
