
//Assign the images in the DOM
let die1Image = document.getElementById("die1");
let die2Image = document.getElementById("die2");

function play(){

















// calculate winner
let result = document.getElementById("result");
if (player1Num > player2Num){
    result.innerHTML = "Player 1 Wins !"
}
else if (player1Num < player2Num){
    result.innerHTML = "Player 2 Wins !"
}
else {
    result.innerHTML = "Draw !"
};
}

//Roll player 1 die and change images
function rollDie1(){
    let player1Num = Math.floor(Math.random()*6)+1;

    switch(player1Num){
        case 1: die1Image.src="images/dice1.png";
        break;
        case 2: die1Image.src="images/dice2.png";
        break;
        case 3: die1Image.src="images/dice3.png";
        break;
        case 4: die1Image.src="images/dice4.png";
        break;
        case 5: die1Image.src="images/dice5.png";
        break;
        case 6: die1Image.src="images/dice6.png";
        break;
    }
}

//Roll player 2 die and change images
function rollDie2(){
    let player2Num = Math.floor(Math.random()*6)+1;

    switch(player2Num){
        case 1: die2Image.src="images/dice1.png";
        break;
        case 2: die2Image.src="images/dice2.png";
        break;
        case 3: die2Image.src="images/dice3.png";
        break;
        case 4: die2Image.src="images/dice4.png";
        break;
        case 5: die2Image.src="images/dice5.png";
        break;
        case 6: die2Image.src="images/dice6.png";
        break;
    }
}

//Execute die roll functions on loading the page
document.addEventListener("DOMContentLoaded", function () {
    rollDie1();
    rollDie2();
});


