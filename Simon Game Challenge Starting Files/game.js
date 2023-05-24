let userClickedPattern = [];

$(".btn").click( function () {
    let userChosenColour = $(this).attr("id");
    userClickedPattern.push(userChosenColour);

    playSound(userChosenColour);
    animatePress(userChosenColour);

    checkAnswer(userClickedPattern.length - 1);
});

let gamePattern = [];

let buttonColours = ["red", "blue", "green", "yellow"];

let gameStarted = false;
let level = 0;

$(document).keydown( function () {
    if (!gameStarted) {
        gameStarted = true;
        nextSequence();
        $("h1").text("Level " + level);
    }
})

function nextSequence() {
    let randomNumber = Math.floor(Math.random() * 3);
    let randomChosenColour = buttonColours[randomNumber];

    gamePattern.push(randomChosenColour);

    let randomChosenButton = $("#" + randomChosenColour);
    randomChosenButton.fadeOut(100);
    randomChosenButton.fadeIn(100);

    playSound(randomChosenColour);

    $("h1").text("Level " + ++level);
}

function playSound(name) {
    let audio = new Audio("./sounds/" + name + ".mp3");
    audio.play();
}

function animatePress(currentColour) {
    $("#" + currentColour).addClass("pressed");
    setTimeout(function () {
        $("#" + currentColour).removeClass("pressed");
    }, 50);
}

function checkAnswer(currentLevel) {
    if (userClickedPattern[currentLevel] !== gamePattern[currentLevel]) {
        $("h1").text("Game Over, Press Any Key to Restart");
        new Audio("./sounds/wrong.mp3").play();
        $("body").addClass("game-over");
        setTimeout(function () {
            $("body").removeClass("game-over");
        }, 200);
        startOver();
    } else if (currentLevel === level - 1) {
        setTimeout( function () { nextSequence(); }, 1000);
        userClickedPattern = [];
    }
}

function startOver() {
    userClickedPattern = [];
    gamePattern = [];
    gameStarted = false;
    level = 0;
}