// Roll player 1's dice and set the image
let randomNumber1 = Math.floor(Math.random() * 6) + 1;
document.querySelector(".img1").setAttribute("src", "./images/dice" + randomNumber1 + ".png");

// Roll player 2's dice and set the image
let randomNumber2 = Math.floor(Math.random() * 6) + 1;
document.querySelector(".img2").setAttribute("src", "./images/dice" + randomNumber2 + ".png");

// If player 1 wins
if (randomNumber1 > randomNumber2)
    document.querySelector("h1").textContent = "🚩Player 1 Wins!";
// If player 2 wins
else if (randomNumber1 < randomNumber2)
    document.querySelector("h1").textContent = "Player 2 Wins!🚩";
// If draw
else
    document.querySelector("h1").textContent = "Draw!";
