import React, {useState, createContext} from 'react'
import ComponentB from './CompB.jsx'

export const UserContext = createContext();

/*Lets call this the parent component:
to use useContext:
1. import creatContext from 'react'
2. export your context = createContext();
3. use:
    <context.Provider value ={value}>
        <Child />
    </context.Provider>
*/



function A(){
    const [user, setUser] = useState('tomato')
    
    return(
    <div>
        <h1>Create context practice</h1>
        <div style={{border: "5px solid black", width: "100vw", textAlign: "center", marginBottom:'5px'}} >
            <h2>Comp A</h2>
            <h2>{`hello ${user}`}</h2>
            <UserContext.Provider value ={user}>
                <ComponentB user={user}/>
            </UserContext.Provider>
    
        </div>
    </div>);
}

export default A