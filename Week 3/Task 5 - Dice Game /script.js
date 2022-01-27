
//Assign the images in the DOM
let result = document.getElementById("result");
let die1Image = document.getElementById("die1");
let die2Image = document.getElementById("die2");

//function to play the game
function play() {

    //role die 1
    let player1Num = Math.floor(Math.random() * 6) + 1;

    //change die 1 iamge to match the score
    switch (player1Num) {
        case 1: die1Image.src = "images/dice1.png";
            break;
        case 2: die1Image.src = "images/dice2.png";
            break;
        case 3: die1Image.src = "images/dice3.png";
            break;
        case 4: die1Image.src = "images/dice4.png";
            break;
        case 5: die1Image.src = "images/dice5.png";
            break;
        case 6: die1Image.src = "images/dice6.png";
            break;
    }

    //role die 2
    let player2Num = Math.floor(Math.random() * 6) + 1;

    //change die 2 iamge to match the score
    switch (player2Num) {
        case 1: die2Image.src = "images/dice1.png";
            break;
        case 2: die2Image.src = "images/dice2.png";
            break;
        case 3: die2Image.src = "images/dice3.png";
            break;
        case 4: die2Image.src = "images/dice4.png";
            break;
        case 5: die2Image.src = "images/dice5.png";
            break;
        case 6: die2Image.src = "images/dice6.png";
            break;
    }

    // calculate and display winner
    if (player1Num > player2Num) {
        result.innerHTML = "Player 1 Wins !"
    }
    else if (player1Num < player2Num) {
        result.innerHTML = "Player 2 Wins !"
    }
    else {
        result.innerHTML = "Draw !"
    };
}

//Execute die roll functions on loading the page
document.addEventListener("DOMContentLoaded", function () {
    play();
});