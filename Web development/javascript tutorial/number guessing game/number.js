let min = Number(window.prompt("enter min number"));
let max = Number(window.prompt("enter max number"));
let button = document.getElementById("btn");
let result = document.getElementById("heading");
let x = Math.floor(Math.random() * max) + min;
let attempts = 0;

button.onclick = function(){
    let guess = document.getElementById("num").value;
    console.log(`guess is ${guess}`);
    console.log(`min is ${min}`);
    console.log(`max is ${max}`);
    if(guess >= min && guess <= max){
        attempts++;
        result.textContent = guess == x? `Nice, the number was ${guess}, attempts was ${attempts}`: guess > x? `value too high`: guess < x? `value too low`: `Please enter a number`;
    }
    else{
        result.textContent = "Please enter value between minimum and maximum value mimimimi";
    }
}