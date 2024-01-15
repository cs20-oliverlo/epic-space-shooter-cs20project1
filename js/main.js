console.log("type 'player[0].lives = 1000' for easier difficulty");

// Set up canvas and graphics context
let cnv = document.getElementById("my-canvas");
let ctx = cnv.getContext("2d");
cnv.width = 480;
cnv.height = 720;

// Global Variables (Once)
// Do images, audio, and stuff here

let mouseIsPressed = false;

// Global Variables
let deltaTime = 0;
let lastTimestamp = 0;

// Reset Variables
// General Game Stuff
let state;
let keys;
let camera;
let levelTime = 0;
let currentLevel;
let pauseScreen;
// HUD
let hud;
// Player
let player;
// Enemies
let enemies;
// Bullets
let bullets;
// Color Palette
let color;

reset();

// Load First Level
function startLevel() {
    loadLevel("level1");

    fetch(`json/levels/level1.json`)
    .then((res) => res.json())
    .then((data) => currentLevel = data)
}

// Playable at any monitors refresh rate
function start() {
    requestAnimationFrame(update);
}

function update() {
    requestAnimationFrame(update);
    let now = performance.now();
    deltaTime = now - lastTimestamp;
    lastTimestamp = now;

    gameStates();
}

start();

// Big Boss Game Function
function gameStates() {
    if (state === "start") {
        drawStart();
    } else if (state === "gameon") {
        runGame();
    } else if (state === "pause") {
        pauseGame();
    } else if (state === "levelwin") {
        levelWin();
    } else if (state === "gameover") {
        levelTimer(true);
        drawGameOver();
        if (levelTime > player[0].lastHit + 3) {
            reset();
        }
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
    if (event.code === "KeyJ") {
        keys.j = true;
    }
    if (event.code === "KeyP") {
        keys.p = true;
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
    if (event.code === "KeyJ") {
        keys.j = false;
    }
    if (event.code === "KeyP") {
        keys.p = false;
    }
    if (event.code === "Space") {
        keys.space = false;
    }
    if (event.code === "ShiftLeft") {
        keys.shiftLeft = false;
    }
}