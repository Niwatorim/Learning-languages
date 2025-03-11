import React, {useState} from 'react'

function Arrayup(){
    const [foods, setFoods] = useState(["Apple","Pineapple","Coconut"]);

    function add(event){
        const newf = document.getElementById("inpt").value;
        setFoods(c=>[...c,newf]);
        document.getElementById("inpt").value=""
    };

    function del(index){
        setFoods(foods.filter((_,i) => i !== index)); // _ means ignore the element
        //what this thingy does is it checks if the index of the values match with i, so if it doesnt filter it into the new array    
    };

    return(
        <div>
            <h1>Array updates</h1>
            <h3>Foods</h3>

            <ul>
                {foods.map((foods,index)=> 
                <li key={index} onClick={()=>del(index)}
                >{foods}</li>)}
            </ul>
            <input type="text" id="inpt" placeholder="enter food please"/>
            <button onClick={(e)=>add(e)}>Add food</button>
        </div>
    
    
    );
}

export default Arrayup