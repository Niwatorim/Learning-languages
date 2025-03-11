import image from './assets/birb.png'
function Card(){
    return(
        <div className="card">
            <img className='img' alt="birb.png" src={image}></img>
            <h2 className='title'>Mimimi III</h2>
            <p className='content'>mimi III, following mimi II who followed mimi I</p>
        </div>
    );
}

export default Card