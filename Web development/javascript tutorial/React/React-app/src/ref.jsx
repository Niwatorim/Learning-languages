import React, {useState, useEffect, useRef} from 'react'

//use ref is the same thing as use state but it doesnt rerender upon every change in state
// used for DOM, animation and timers etc.


function Ref(){

    const number = useRef(0); //over here u set ur initial value just like useState

    const val = useRef(null); //imma use this to interact with DOM elements

    useEffect(() => { //Using this to check if there is a re rendering or not to confirm
        console.log(
            "Rendering"
        );
    });

    function click(){
        number.current++;        
        console.log(number.current);

        val.current.focus(); // focuses on the input box
        val.current.style.backgroundColor = "blue";
    }

    return(<div>
        <button style={{fontSize:"2rem", marginTop:"10px", textAlign:"center"}} onClick={click}>
            Click button
        </button>
        <input ref={val}/>
    </div>);
}

export default Ref