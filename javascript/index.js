let dice1Path = "images/dice1.png";
let dice2Path = "images/dice2.png";
let dice3Path = "images/dice3.png";
let dice4Path = "images/dice4.png";
let dice5Path = "images/dice5.png";
let dice6Path = "images/dice6.png";


let arrayOfDice = [
    dice1Path,
    dice2Path,
    dice3Path,
    dice4Path,
    dice5Path,
    dice6Path
];


function changeImg(id) {
    let random = Math.floor((Math.random() * arrayOfDice.length));
    let path = arrayOfDice[random];
    window.onload = document.querySelector(id).setAttribute("src", path);
    return random;
}

let dice1 = changeImg("#dice1");
let dice2 = changeImg("#dice2");

function winningPlayer() {
    if (dice1 > dice2) {
        document.querySelector("#head").textContent = "Player 1 Wins !!";
    } else if (dice1 == dice2) {
        document.querySelector("#head").textContent = "Draw";
    } else {
        document.querySelector("#head").textContent = "Player 2 Wins !!";
    }
}

winningPlayer();
