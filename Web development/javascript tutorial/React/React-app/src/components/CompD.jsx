import React, {useState, useContext} from 'react'
import {UserContext} from './CompA.jsx'
/*
1. import useContext from 'react
2. import {context} from './CompA'
3. const value = useContext(context)
*/

function D(){
    const user = useContext(UserContext);
    //Now this user is from component A so ye, it exists
    return(
    <div>
        <div style={{border: "5px solid black", width: "100vw", textAlign: "center", margin:'5px 5px'}}>
            <h2>Comp D</h2>
            <h3>{`Goodbye ${user}`}</h3> 
        </div>
    </div>);
}

export default D