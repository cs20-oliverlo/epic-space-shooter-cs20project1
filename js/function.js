function drawStart() {
    drawMainComponents();

    // Start Text
    ctx.font = "40px Consolas";
    ctx.fillStyle = "rgb(25, 190, 40)";
    ctx.fillText("CLICK TO START", 100, cnv.height / 2)
}

function runGame() {

}

function pauseGame() {

}

function drawGameOver() {

}

function drawMainComponents() {
    // Background
    ctx.fillStyle = "black";
    ctx.fillRect(0, 0, cnv.width, cnv.height);
    
    drawPlayer();
}

function drawPlayer() {
    ctx.lineWidth = 2;
    ctx.strokeStyle = "rgb(50, 130, 255)";
    ctx.beginPath();
    ctx.moveTo(11.5 + player[0].x, 25 + player[0].y);
    ctx.lineTo(0 + player[0].x, 35 + player[0].y);
    ctx.lineTo(-11.5 + player[0].x, 25 + player[0].y);
    ctx.stroke();

    ctx.lineWidth = 2;
    ctx.strokeStyle = "red";
    ctx.beginPath();
    ctx.moveTo(0 + player[0].x, 0 + player[0].y);
    ctx.lineTo(10 + player[0].x, 25 + player[0].y);
    ctx.lineTo(0 + player[0].x, 20 + player[0].y);
    ctx.lineTo(-10 + player[0].x, 25 + player[0].y);
    ctx.closePath(); // Go back to start
    ctx.stroke();
}

function newPlayer(xP, yP, xVelP, yVelP, shootP, upP, leftP, rightP, downP) {
    return {
        x: xP,
        y: yP,
        xVel: xVelP,
        yVel: yVelP,
        shoot: shootP,
        up: upP,
        left: leftP,
        right: rightP,
        down: downP
    }
}

function reset() {
    state = "start";

    camera = {
        x: 0,
        y: 0
    };

    player = [];
    player.push(newPlayer(cnv.width / 2, 580, 5, 5, false, false, false, false, false));
}