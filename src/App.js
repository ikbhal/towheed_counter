import logo from './logo.svg';
import './App.css';
import {useState} from 'react';
import { useEffect } from 'react';
import { JsonToTable } from "react-json-to-table";

function SevenYears({yearRoi}){
  // var yearRoi= 1.105;
  var [n, setn] = useState(7);
  var [roi,setroi] = useState(Math.pow(yearRoi,7).toPrecision(3));
  var [a, seta] = useState(1);
  var [ra, setra] = useState(1);
  var [testResult, setTestResult] = useState([]);
  
  // useEffect(()=>{
  //     var r = Math.pow(1, n);
  //     setroi(r);
  // },[n]);

  const changeYear = (e) =>{
      var y = parseInt(e.target.value);
      console.log("y:"+y);
      setn(y);
      var r = Math.pow(yearRoi, y).toPrecision(3);
      console.log("r: " +r);
      setroi(r);
      console.log("a:" +a);
      var ra = (a * r).toPrecision(3);
      setra(ra);
      console.log("ra:" + ra);

      setTestResult([...testResult,{year:n, roi, 
        //roi_by_year: (roi/n).toPrecision(3),
        // multply: (n * (yearRoi-1)).toPrecision(3)
        }]);
  }

  return (
    <div className="seven-years">
        <h2>Seven Years</h2>
        <p>year growth: {yearRoi}</p>
        <p>{n} year 1 rupee Roi : {roi}</p>
        Years: <input type='number' value={n} onChange={changeYear}/> <br/>
        Amount: <input tyep='number' onChange ={e=>seta(e.target.value)} value={a}/>
        <p>Return for amount : {ra}</p>

        <hr/>
        <JsonToTable json={testResult} />
    </div>
  );
}

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

function Timer({name}){


  var [temp, settemp] = useState(0);
  var [number, setNumber] = useState(0);
  var [c, setc] = useState(0);

  var interval = null;
  const start = () =>{
    if(number >0){
      setc(number);
      interval = setInterval(() =>{
        console.log("inside timer interval name: "+name);
        setc(c => c-1);
        if(c ==0){
          clearInterval(interval);
        }
      },1000)
    }
  };

  const stop =()=>{
    if(interval){
      clearInterval(interval);
    }
  };
  return(
    <div className="timer">
      Timer {name}
      <input type="number" value={number} onChange ={e => setNumber(e.target.value)}/>
      {/* <input type="number" value={temp} onChange ={e => settemp(e.target.value)}/> */}
      <p>Counter: {c}</p>
      <button onClick={start}>Start</button>
      <button onClick={stop}>stop</button>
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


    <div className="seven-years-group">
      <SevenYears yearRoi= {1.105}/>
      <SevenYears yearRoi= {1.15}/>

      <SevenYears yearRoi= {1.20}/>
      <SevenYears yearRoi= {1.3}/>
      <SevenYears yearRoi= {1.40}/>
      <SevenYears yearRoi= {1.50}/>
    </div>


    <hr/>

    <h2>Count {number}</h2>
    <button onClick={incr}>+</button>
    <button onClick={decr}>-</button>
    <button onClick={reset}>0</button>

    <hr/>

    <div className="timer-group">
      <Timer name={"zuhr"}/>
      <Timer name={"asr"}/>
      <Timer name={"magrib"}/>
    </div>
    
    <hr/>
    <StopWatch/>
    <hr/>
    <CountDown number={10}/> <br/>

    <CountDown number={100}/>
    </div>


  );
}

export default App;
