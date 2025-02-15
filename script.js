let interval;

function startEffect() {
    let audio = document.getElementById("sound");
    audio.play(); // Play Music

    interval = setInterval(() => {
        let colors = ["red", "blue", "green", "purple", "orange", "yellow", "pink", "brown", "white"];
        let randomColor = colors[Math.floor(Math.random() * colors.length)];
        document.getElementById("bg").style.backgroundColor = randomColor;
    }, 100); // Change Color Every 500ms
}

function stopEffect() {
    let audio = document.getElementById("sound");
    audio.pause(); // Stop Music
    audio.currentTime = 0; // Reset Audio

    clearInterval(interval); // Stop Color Change
    document.getElementById("bg").style.backgroundColor = ""; // Reset Background
}
