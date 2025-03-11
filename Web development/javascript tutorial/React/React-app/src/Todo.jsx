import React, {useState} from 'react'

function Todo(){
    const [work,setWork] = useState([]);
    const [neww,setNeww]= useState("");

    function write(event){
        setNeww(event.target.value);

    }

    function add(){
        if(neww.trim() !== ""){
            setWork(w=>[...w,neww]);
            setNeww("");
        }
        console.log(work);
    }

    function del(index){
        setWork(work.filter((_,i)=>i !== index));

    }

    function up(index){
        if(index>0){
            const updated=[...work];
            [updated[index],updated[index-1]]=[updated[index-1],updated[index]];
            setWork(updated);
        }
    }

    function down(index){
        if(index< work.length-1){
            const updated=[...work];
            [updated[index],updated[index+1]]=[updated[index+1],updated[index]];
            setWork(updated);
        }
    }

    return(<div>
        <h1>Trial program</h1>
        <h2>To do list</h2>
        <div>
            <input id="inpt" type="text" placeholder="Enter a task" value={neww} onChange={write}></input>
            <button onClick={add}>Add</button>
        </div>

        <ol>
            {work.map((element,index)=>
                <li key={index}>
                    <span className="text">{element}</span>
                    <button onClick={()=>del(index)}>Delete</button>
                    <button onClick={()=>up(index)}>Up</button>
                    <button onClick={()=>down(index)}>Down</button>
                </li>
            )};
        </ol>

    </div>
    );
}


export default Todo