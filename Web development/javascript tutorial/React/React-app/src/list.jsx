
function List(props){

    const category=props.category;
    const list=props.items;

    const listitems= list.map((item)=> <li key={item.id}>{item.name}:<b>{item.cal}</b></li>)

    return(<>
    <h3>{category}
    </h3>
    <ol>{listitems}</ol>
    </>)

    const food=["Pizza","Pasta","Tomatoes"];
    //How to render lists
    food.sort();

    let foodcal=[{id:1, name:'Pizza', cal: 95},
                {id:2, name: 'Pasta', cal: 27},
                {id:3, name:'Tomatoes', cal: 137}]; //objects
    
    //foodcal.sort((a,b) => a.name.localeCompare(b.name)); //alphabetical order sort

    //foodcal.sort((a,b)=> b.cal-a.cal);//sort numerically
    const lowcal=foodcal.filter(item => item.cal < 100);
    
    const foodnames = foodcal.map((item) => <li key={foodcal.name}>{item.name}: &nbsp; 
    <b>{item.cal}</b></li>);
    

    const items = food.map((food)=> <li>{food}</li>);
    //return (<ul>{foodnames}</ul>);
}
export default List