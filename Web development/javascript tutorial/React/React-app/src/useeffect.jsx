import React, {useEffect, useState} from 'react'

//Use effect is for a few things:
/*
its like, it does something when: rerender component
component mounts (gets loaded in at the start)
state of value changes

Basically the loading sign when something is loading in, or when ur requesting from api, this stuff runs

theres a form:
useEffect(function,[dependecies])

1. useEffect(()=> code) //runs after every re-render
2. useEffect(()=>code,[]) runs only on mount(new page)
3. useEffect(()=>code,[variable]) runs on mount and when value of variable changes
*/


function Effect(){
    const [count,setCount] = useState(0);

    useEffect(()=>{
        document.title=count;

        //So if u have a return function here you can run some cleanup code that will unmount stuff for u if u want to free up resources
    },[count]) //runs only when count changes or on mount

    function add(){
        setCount(c=>c+1);
    }

    function del(){
        setCount(c=>c-1);
    }

    function reset(){
        setCount(0);
    }



    return(
    <div>
        <h1>Use Effect hook practice</h1>
        <h2>Set Count</h2>
        <h3 style={{textAlign:"center"}}>{count}</h3>
        <button onClick={add}>Add</button>
        <button onClick={del}>Delete</button>
        <button onClick={reset}>Reset</button>

    </div>);


}

export default Effect

/*
Here is the example of where its useful:
First, window.addEventListener(event,function)

this checks for events like an input or something and it runs the function

now for code:

function Component(){
    const [width,setWidth]= useState(window.innerwidth);
    const [height, setHeight]= useState(window.innerheight);

    useEffect(() => { <-- this runs only on mount, so if it wasnt there and u just had an event listener, everytime there would be a resize of a window it would change the values and keep running the code, but over here only once the user stops resizing will it run once, and it will also unmount after the user is done resizing, thats the purpose of the return function 
        window.addEventListener("resize",Resize);
        console.log("event listner added");

        return() => {
            window.removeEventListener("resize",Resize);
            console.log("Event listener removed")
            }
        },[]);

        Resize(){
            setWidth(window.innerwidth);
            setHeight(window.innerheight);
        }


}



*/