// Creating a Random Number for Dice 1
let randomNumber1 = Math.floor(Math.random() * 6) + 1;

// Change the img1 to a Random Dice
document.getElementsByClassName("img1")[0].setAttribute("src", "images/dice"+randomNumber1+".png");



// Creating a Random Number for Dice 2
let randomNumber2 = Math.floor(Math.random() * 6) + 1;

// Change the img2 to a Random Dice
document.getElementsByClassName("img2")[0].setAttribute("src", "images/dice"+randomNumber2+".png")



// Changing the title to display the winner 
if (randomNumber1 > randomNumber2) {
    document.querySelector("h1").textContent = "🚩 Player 1 Wins!";
} else if (randomNumber1 < randomNumber2) {
    document.querySelector("h1").textContent = "Player 2 Wins! 🚩";
} else {
    document.querySelector("h1").textContent = "Draw!";
}

// function to reload to play again
playAgain = () => location.reload(); 