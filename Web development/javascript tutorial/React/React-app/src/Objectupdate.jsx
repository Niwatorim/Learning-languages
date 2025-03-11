import React, {useState} from 'react'

function Objectupdate(){

    const [person,setPerson]= useState({name:"mimimi", title:"The", place:"III"})
    //this makes person an object

    function namec(event){
        setPerson(p=>({...p,name: event.target.value})); //thing that happens here is it spreads the values and u get:
        //name:mimimi, title:The place: III name:event.target.value
        //what this does is cuz name comes twice, javascript takes the second value
    }

    function placec(event){
        setPerson(p=>({...p, place: event.target.value}));
    }



    return(<div>
        <h1>Object updater</h1>
        <p>The person is: {person.name} {person.title} {person.place}</p>

        <input type="text"value={person.name} onChange={namec} placeholder="enter name"/>
        <br></br>
        <input type="text" value={person.place} onChange={placec}></input>
        
    
        </div>);
} 

export default Objectupdate