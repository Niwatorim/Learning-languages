import React, {useState, useEffect, useRef} from 'react';



function Stopwatch(){

    const [isRunning, setRunning] = useState(false);
    const [elapsedTime, setElapsed] =useState(0);
    const intervalref =useRef(null);
    const starttimeref=useRef(0);

    useEffect(()=>{
        if(isRunning){
            intervalref.current = setInterval(()=>{
                setElapsed(Date.now()-starttimeref.current);
            },10);
        }

        return()=>{
            clearInterval(intervalref.current);
        }
    },[isRunning]);

    function start(){
        setRunning(true);
        starttimeref.current = Date.now() - elapsedTime;
    }

    function stop(){
        setRunning(false);
    }

    function reset(){
        setElapsed(0);
        setRunning(false);
    }

    function formattime(){

        let hours = String(Math.floor(elapsedTime / (1000*60*60))).padStart(2,"0");
        let min = String(Math.floor(elapsedTime / (1000*60) %60)).padStart(2,"0");
        let sec = String(Math.floor(elapsedTime / (1000)%60)).padStart(2,"0");
        let mili = String(Math.floor((elapsedTime % 1000)/10)).padStart(2,"0");


        return `${hours}:${min}:${sec}:${mili}`;
    }

    return(<div>
        <div className="timer">
            {formattime()}
        </div>
        <div>
            <button onClick={start}>Start</button>
            <button onClick={stop}>Stop</button>
            <button onClick={reset}>Reset</button>
        </div>

    </div>)
}

export default Stopwatch