import React, {useState, createContext} from 'react'
import ComponentC from './CompC.jsx' 

/*
1. import useContext from 'react
2. import {context} from './CompA'
3. const value = useContext(context)

*/

function B(){
    return(
    <div>
        <div style={{border: "5px solid black", width: "100vw", textAlign: "center",margin:'5px'}}>
            <h2>Comp B</h2>
            <ComponentC/>
        </div>
    </div>);
}

export default B