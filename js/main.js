// Set up canvas and graphics context
let cnv = document.getElementById("my-canvas");
let ctx = cnv.getContext("2d");
cnv.width = 480;
cnv.height = 720;

// Global Variables (Once)
// Do images, audio, and stuff here

let mouseIsPressed = false;

// Global Variables (Reset)
let state;
let deltaTime = 0;
let lastTimestamp = 0;
let keys;
let camera;
let currentLevel;
let player;
let enemies;
let enemyWaves;
let bullets;
let color;
reset();

// Playable at any monitors refresh rate (I think, I have not tried it on other than the school ones)

function start() {
    requestAnimationFrame(update);
}

function update(timestamp) {
    requestAnimationFrame(update);
    let now = performance.now();
    deltaTime = now - lastTimestamp;
    lastTimestamp = now;

    draw();
    console.log(deltaTime);
}

start();

// Draw Function

function draw() {
    if (state === "start") {
        drawStart();
    } else if (state === "gameon") {
        runGame();
    } else if (state === "gamepause") {
        pauseGame();
    } else if (state === "gameover") {
        drawGameOver();
    }

    controls();
}

// Event Stuff
document.addEventListener("mousedown", mousedownHandler);
document.addEventListener("mouseup", mouseupHandler);
document.addEventListener("keydown", keydownHandler);
document.addEventListener("keyup", keyupHandler);

function mousedownHandler() {
    mouseIsPressed = true;
}

function mouseupHandler() {
    mouseIsPressed = false;
}

function keydownHandler(event) {
    if (event.code === "KeyW") {
        keys.w = true;
    }
    if (event.code === "KeyA") {
        keys.a = true;
    }
    if (event.code === "KeyD") {
        keys.d = true;
    }
    if (event.code === "KeyS") {
        keys.s = true;
    }
    if (event.code === "Space") {
        keys.space = true;
    }
    if (event.code === "ShiftLeft") {
        keys.shiftLeft = true;
    }
}


function keyupHandler(event) {
    if (event.code === "KeyW") {
        keys.w = false;
    }
    if (event.code === "KeyA") {
        keys.a = false;
    }
    if (event.code === "KeyD") {
        keys.d = false;
    }
    if (event.code === "KeyS") {
        keys.s = false;
    }
    if (event.code === "Space") {
        keys.space = false;
    }
    if (event.code === "ShiftLeft") {
        keys.shiftLeft = false;
    }
}