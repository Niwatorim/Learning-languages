let enter = document.getElementById('number');
let result = document.getElementById('result');
const cf = document.getElementById('c-f');
const fc = document.getElementById('f-c');
let button = document.getElementById('btn');

function cef(temp){
    temp = temp * 9/5 + 32;
    return (`${temp}°F`);
}

function fce(temp){
    temp = (temp-32) * 5/9;
    return (`${temp}°C`);
}

button.onclick = function(){
    let temp = Number(enter.value);
    data = cf.checked == true? cef(temp) : "choose a conversion" || fc.checked == true? fce(temp): "invalid";
    result.textContent = data;
}
