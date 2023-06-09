for (let drum of document.querySelectorAll(".drum")) {
    
    drum.addEventListener("click", function() { 
        PlaySound(drum.textContent);
        Animate(drum.textContent);
    });
}

document.addEventListener("keydown", function(event) {
    Animate(event.key);
    PlaySound(event.key);
});

function PlaySound(key) {
    switch (key) {
        case "w":
            new Audio("./sounds/crash.mp3").play();
            break;
        case "a":
            new Audio("./sounds/kick-bass.mp3").play();
            break;
        case "s":
            new Audio("./sounds/snare.mp3").play();
            break;
        case "d":
            new Audio("./sounds/tom-1.mp3").play();
            break;
        case "j":
            new Audio("./sounds/tom-2.mp3").play();
            break;
        case "k":
            new Audio("./sounds/tom-3.mp3").play();
            break;
        case "l":
            new Audio("./sounds/tom-4.mp3").play();
            break;
        default:
            console.log("No matching audio files found.");
    }
}

function Animate(key) {
    document.querySelector("." + key).classList.add("pressed");
    setTimeout(function() { document.querySelector("." + key).classList.remove("pressed") }, 100);
}