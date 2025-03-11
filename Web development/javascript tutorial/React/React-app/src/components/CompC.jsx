import React, {useState, createContext} from 'react'
import ComponentD from './CompD.jsx'

function C(){
    return(
    <div>
        <div style={{border: "5px solid black", width: "100vw", textAlign: "center", margin:'5px 5px'}}>
            <h2>Comp C</h2>
            <ComponentD/>
        </div>
    </div>);
}

export default C