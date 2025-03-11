import React, {useState} from "react";

function Cars(){
    const [cars,setCars]=useState([]);
    const [carYear,setYear]=useState(new Date().getFullYear());
    const [carMake,setMake]=useState("");
    const [carModel,setModel]=useState("");


    function add(){
        const car={Year: carYear, Make: carMake, Model: carModel};

        setCars(c => [...c,car]);
        
        setYear(new Date().getFullYear());
        setMake("");
        setModel("");

    }
    
    function del(index){
        setCars(c=> c.filter((_,i) => i!==index));
    }

    function yearchange(event){
        setYear(event.target.value);
    }

    function modelchange(event){
        setModel(event.target.value);
    }

    function makechange(event){
        setMake(event.target.value);
    }

    return(
        <div>
            <h1>Arrays of Objects</h1>
            <h2>List of Car Objects</h2>
            <ul>
                {cars.map((e,i) =>
                <li key={i} onClick={()=>del(i)}>{e.Year} {e.Make} {e.Model}</li>)}
            </ul>
            
            <input type="number" value={carYear} onChange={yearchange}></input> <br/>

            <input type="text" placeholder="Enter make" value={carMake} onChange={makechange}></input> <br/>

            <input type="text" value={carModel} placeholder="Enter model" onChange={modelchange}></input>

            <button onClick={add}>Add Car</button>

        </div>    
    )
}

export default Cars