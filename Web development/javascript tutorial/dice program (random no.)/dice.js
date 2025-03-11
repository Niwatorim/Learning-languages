const dice1 = document.getElementById("dice1");
const dice2 = document.getElementById("dice2");
const roll = document.getElementById("roll");

roll.onclick = function() {
    let x = Math.floor(Math.random() * 6) + 1; // Get a random integer from 1 to 6
    let y = Math.floor(Math.random() * 6) + 1;

    dice1.setAttribute("src", `dice${x}.png`);
    dice2.setAttribute("src", `dice${y}.png`);

    if (x === y) {
        document.getElementById("result").textContent = "Draw";
    } else {
        document.getElementById("result").textContent = `Player 1: ${x}, Player 2: ${y}`;
    }
}
