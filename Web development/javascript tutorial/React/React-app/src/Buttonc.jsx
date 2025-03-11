import React, {useState} from 'react';

function Buttonc(){
    const handleClick= () => window.alert('le oof');

    const handleClick2 = (name) => window.alert(`${name} le bruh`);

    const [count,setCount] = useState(0);

    const adder= function(count){
        count < 3 ? (console.log('le oof'), setCount(count+1)) : console.log(`You clicked ${count} times`)
    };

    const change = (e) => e.target.textContent = "AYO";
    
    return( //onClick function just does a function when button is clicked
        <button onClick={(e)=> change(e)}>click me</button>
    );
}

export default Buttonc