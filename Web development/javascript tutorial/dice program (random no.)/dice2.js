

function rollDice(){
    const numDice = document.getElementById("num").value;
    const result = document.getElementById("diceResults");
    const image= document.getElementById("diceImages");
    const values= [];
    const images = [];
    
    for(let i = 0; i< numDice; i++){
        const value= Math.floor(Math.random() *6 ) + 1;
        values.push(value);
        images.push(`<img src="dice${value}.png" width = 30px>`)
    }

    result.textContent = `dice: ${values.join(`, `)}`;
    image.innerHTML= images.join(``);
}