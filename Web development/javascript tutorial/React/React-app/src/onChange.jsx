import React, {useState} from 'react'

function Check(){

    const [name,setName] = useState("Guest");
    const [quantity,setQuantity] = useState(0);
    const [area,setArea]= useState("");
    const [opt, setOpt] = useState("");
    const [radio,setRadio] = useState()

    function inp(event){
        setName(event.target.value);
    }
    
    function quant(event){
        setQuantity(event.target.value);
    }

    function areac(event){
        setArea(event.target.value);
    }

    function optc(event){
        setOpt(event.target.value);
    }
    function radioc(event){
        setRadio(event.target.value);
    }

    return(
        //onChange alr passes event into the thing so need arrow function like with onClick, so no need problem having with this
        <div>
            <input value={name} onChange={inp} />
            <p>Name: {name}</p>

            <input value= {quantity} onChange={quant} type="number"></input>
            <p>Age: {quantity}</p>
            
            <textarea value={area} onChange={areac} placeholder="Enter values"></textarea>
            <p>Text: {area} </p>

            <select value={opt} onChange={optc}>
                <option value="">Select an option</option>
                <option value="Potatoes">Potatoes</option>
                <option value="Tomatoes">Tomatoes</option>
            </select>
            <p value={opt} onChange={optc}>{opt}</p>

            <label>
                <input type="radio" value="1"
                        checked={radio==="1"}
                        onChange={radioc} 
                ></input>
                Option 1
            </label>

            <label>
                <input type="radio" value="2"
                        checked={radio==="2"}
                        onChange={radioc}></input>
                Option 2
            </label>
            <p>Option is: {radio}</p>


        </div>
    )
}

export default Check


