import React, {useState} from 'react'; 

function Component(){

    const size = {
        fontSize: "10rem",
        textAlign: "center",
    };
    const [count,setCount] = useState(0);

    const increment= () => setCount(count + 1);
    
    const decrement = () => setCount(count - 1);

    const reset = () => setCount(0);

    return(
        <div>
            <p style={size}>{count}</p>
            <button onClick={increment}>Increase</button>
            <button onClick={decrement}>Decrease</button>
            <button onClick={reset}>Reset</button>
        </div>
    )
}

export default Component