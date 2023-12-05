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
let camera;
let player;
reset();

// Draw Function
window.addEventListener("load", draw);

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

    // Request Animation Frame
    requestAnimationFrame(draw);
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

    }
    if (event.code === "KeyA") {
        
    }
    if (event.code === "KeyD") {
        
    }
    if (event.code === "KeyS") {
        
    }
    if (event.code === "Space") {
        
    }
    if (event.code === "ShiftLeft") {
        
    }
}


function keyupHandler(event) {
    if (event.code === "KeyW") {

    }
    if (event.code === "KeyA") {
        
    }
    if (event.code === "KeyD") {
        
    }
    if (event.code === "KeyS") {
        
    }
    if (event.code === "Space") {
        
    }
    if (event.code === "ShiftLeft") {
        
    }
}