function drawStart() {
    // Background
    ctx.fillStyle = "black";
    ctx.fillRect(0, 0, cnv.width, cnv.height);

    // Start Text
    ctx.font = "50px chunkyCPC";
    ctx.fillStyle = "rgb(25, 190, 40)";
    ctx.fillText("CLICK TO START", 50, cnv.height / 2, cnv.width - 80);
}

function drawMainComponents() {
    // Background
    ctx.fillStyle = "black";
    ctx.fillRect(0, 0, cnv.width, cnv.height);

    if (state === "gameon") {
        drawHeadUpsDisplay();
    } else if (state === "pause") {
        drawPause();
    }
}

function drawHeadUpsDisplay() {
    // Score
    ctx.font = "15px chunkyCPC";
    ctx.fillStyle = color.white;
    ctx.fillText(`SCORE > ${player[0].score}`, 10, 25);

    // Multiplier
    ctx.font = "15px chunkyCPC";
    ctx.fillStyle = color.white;
    ctx.fillText(`MULT.`, cnv.width - 100, 25);

    // Multiplier Number
    ctx.font = "15px chunkyCPC";
    ctx.fillStyle = color.white;
    ctx.fillText(`${player[0].multiplier.toFixed(1)}`, cnv.width - 60, 50);

    // Lives
    ctx.font = "15px chunkyCPC";
    ctx.fillStyle = color.white;
    ctx.fillText(`${player[0].lives}`, 10, cnv.height - 10);
}

function drawPause() {

}

function drawPlayer() {
    // Thruster
    ctx.lineWidth = 2;
    if (player[0].invincible === false) {
        ctx.strokeStyle = color.babyBlue;
    } else {
        ctx.strokeStyle = color.white;
    }
    ctx.beginPath();
    ctx.moveTo(11.5 + player[0].x, 25 + player[0].y - 15);
    ctx.lineTo(0 + player[0].x, 35 + player[0].y - 15);
    ctx.lineTo(-11.5 + player[0].x, 25 + player[0].y - 15);
    ctx.stroke();

    // Ship
    ctx.lineWidth = 2;
    if (player[0].invincible === false) {
        ctx.strokeStyle = color.darkerGreen;
    } else {
        ctx.strokeStyle = color.white;
    }
    ctx.beginPath();
    ctx.moveTo(0 + player[0].x, 0 + player[0].y - 15);
    ctx.lineTo(player[0].w / 2 + player[0].x, player[0].h / 2 + player[0].y - 15);
    ctx.lineTo(0 + player[0].x, 20 + player[0].y - 15);
    ctx.lineTo(-player[0].w / 2 + player[0].x, player[0].h / 2 + player[0].y - 15);
    ctx.closePath();
    ctx.stroke();
}

function drawEnemies(n) {
    if (enemies[n].x > camera.x && enemies[n].x < camera.x + cnv.width && enemies[n].y > camera.y && enemies[n].y < camera.y + cnv.height) {
        if (enemies[n].id === "discus") {
            ctx.lineWidth = 3;
            ctx.strokeStyle = enemies[n].color;
            ctx.beginPath();
            ctx.arc(enemies[n].x, enemies[n].y, enemies[n].r, 0, 2 * Math.PI);
            ctx.stroke();
        }
    }
}

function drawBullets(n) {
    if (bullets[n].id === "laser") {
        ctx.lineWidth = 3;
        ctx.strokeStyle = bullets[n].color;
        ctx.beginPath();
        ctx.moveTo(bullets[n].x, bullets[n].y);
        ctx.lineTo(bullets[n].x, bullets[n].y + bullets[n].h);
        ctx.stroke();
    }
}