import React, {useState} from 'react'

function ComponentUp(){

    const size = {
        fontSize: "10rem",
        textAlign: "center",
    };
    const [count,setCount] = useState(0);
    
    //React doesnt update a state until entire function works at once, so e.g.

    /* function increment(){
        setCount(count+1);
        setCount(count+1);
    }
        This wouldn't invrement twice, cuz once the first command runs it doesnt change the state of count until the entire function is over. What you have to do instead is this:    
    */
    function increment (){
        setCount(c => c + 1);
        setCount(c => c + 1);
        setCount(c => c + 1);
    }
    function decrement(){
        setCount(c => c - 1);
        setCount(c => c - 1);
        setCount(c => c - 1);
    }

    function reset(){
        setCount(0);
    }

    return(
        <div>
            <h1>Updater function</h1>
            <p style={size}>{count}</p>
            <button onClick={increment}>Increase (by 3)</button>
            <button onClick={decrement}>Decrease (by 3)</button>
            <button onClick={reset}>Reset</button>
        </div>
    )
}

export default ComponentUp