import React, {useState,useEffect} from 'react'


function Clock(){
    const [time,setTime] =useState(new Date());

    useEffect(()=>{
        const valID= setInterval(()=> {setTime(new Date())},1000);
    
        return () => {
            clearInterval(valID);
        }
    },[])

    function display(){
        let hours = time.getHours();
        const minutes = time.getMinutes();
        const seconds = time.getSeconds();
        const merid = hours>12? "PM" : "AM";

        hours = hours % 12 || 12;

        return `${pad(hours)}:${pad(minutes)}:${pad(seconds)} ${pad(merid)}`;

    }

    function pad(x){
        const y =  (x < 10 ? "0" :"")+x;
        return y 
    }


    return(<div>
            <h1>Clock program</h1>
            <p>{display()}</p>


    </div>)
}

export default Clock