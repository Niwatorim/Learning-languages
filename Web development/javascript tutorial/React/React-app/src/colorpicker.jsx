
import React, {useState} from 'react'

function Color(){
    const [color,setColor] = useState("#FFFFFF");

    function colorChange(event){
        setColor(event.target.value)
    };


    return(
        <div>
            <h1>Color Picker</h1>

            <div id='background' style={{backgroundColor: color}}>
                <p>Selected Color is {color}</p>
            </div>
            <label>Select Color</label>
            <input type="color" value={color} onChange={colorChange}/>
        </div>
    )
}

export default Color