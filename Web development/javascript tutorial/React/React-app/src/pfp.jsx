
function Pfp(){
    const img= './src/assets/birb.png'
    const handle= (e) => console.log('oof');


    return(
        <img src={img} onClick={(e) => handle(e)}></img>
    );
}

export default Pfp