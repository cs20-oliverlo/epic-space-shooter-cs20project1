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
}

function drawHeadUpsDisplay() {
    // Score
    ctx.font = "15px chunkyCPC";
    ctx.fillStyle = color.white;
    ctx.fillText(`${Math.floor(player[0].score)}`, 10, 25);

    // Multiplier Number
    ctx.font = "15px chunkyCPC";
    ctx.fillStyle = color.white;
    ctx.fillText(`${player[0].multiplier.toFixed(1)}x`, cnv.width - 90, 25);

    if (player[0].invincible === false) {
        ctx.fillStyle = color.white;
    } else {
        ctx.fillStyle = "red";
    }
    ctx.beginPath();
    ctx.moveTo(hud.life.x1 + 1, hud.life.y1 - 1);
    ctx.lineTo(hud.life.x2, hud.life.y2 + 1);
    ctx.lineTo(hud.life.x3 - 1, hud.life.y3 - 1);
    ctx.closePath();
    ctx.fill();

    ctx.lineWidth = 1;
    if (player[0].lives < 1) {
        ctx.fillStyle = "black";
    } else {
        ctx.strokeStyle = "black";
    }
    ctx.beginPath();
    ctx.moveTo(hud.life.x1, hud.life.y1);
    ctx.lineTo(hud.life.x3 - (hud.life.x3 - hud.life.x1) * 1/3, hud.life.y3);
    ctx.lineTo(hud.life.x1 + (hud.life.x3 - hud.life.x1) / 2, hud.life.y1 - ((hud.life.x3 - hud.life.x1) / 2) ** 2 / (Math.sqrt((hud.life.x3 - hud.life.x1) ** 2 - ((hud.life.x3 - hud.life.x1) / 2) ** 2)));
    ctx.lineTo(hud.life.x1 - (((hud.life.x3 - hud.life.x1) / 2) ** 2 / (Math.sqrt((hud.life.x3 - hud.life.x1) ** 2 - ((hud.life.x3 - hud.life.x1) / 2) ** 2)) * ((hud.life.x3 - hud.life.x1) / 2) / (hud.life.y2 - hud.life.y1)), hud.life.y1 - ((hud.life.x3 - hud.life.x1) / 2) ** 2 / (Math.sqrt((hud.life.x3 - hud.life.x1) ** 2 - ((hud.life.x3 - hud.life.x1) / 2) ** 2)));
    ctx.closePath();
    if (player[0].lives < 1) {
        ctx.fill();
    } else {
        ctx.stroke();
    }

    ctx.lineWidth = 1;
    if (player[0].lives < 2) {
        ctx.fillStyle = "black";
    } else {
        ctx.strokeStyle = "black";
    }
    ctx.beginPath();
    ctx.moveTo(hud.life.x2, hud.life.y2);
    ctx.lineTo(hud.life.x3 - (hud.life.x3 - hud.life.x1) / 3, hud.life.y2 + ((hud.life.x3 - hud.life.x1) / 2) ** 2 / (Math.sqrt((hud.life.x3 - hud.life.x1) ** 2 - ((hud.life.x3 - hud.life.x1) / 2) ** 2)));
    ctx.lineTo(hud.life.x1 + (hud.life.x3 - hud.life.x1) / 2, hud.life.y1 - ((hud.life.x3 - hud.life.x1) / 2) ** 2 / (Math.sqrt((hud.life.x3 - hud.life.x1) ** 2 - ((hud.life.x3 - hud.life.x1) / 2) ** 2)));
    ctx.lineTo(hud.life.x1 - (((hud.life.x3 - hud.life.x1) / 2) ** 2 / (Math.sqrt((hud.life.x3 - hud.life.x1) ** 2 - ((hud.life.x3 - hud.life.x1) / 2) ** 2)) * ((hud.life.x3 - hud.life.x1) / 2) / (hud.life.y2 - hud.life.y1)), hud.life.y1 - ((hud.life.x3 - hud.life.x1) / 2) ** 2 / (Math.sqrt((hud.life.x3 - hud.life.x1) ** 2 - ((hud.life.x3 - hud.life.x1) / 2) ** 2)));
    ctx.closePath();
    if (player[0].lives < 2) {
        ctx.fill();
    } else {
        ctx.stroke();
    }

    ctx.lineWidth = 1;
    if (player[0].lives < 3) {
        ctx.fillStyle = "black";
    } else {
        ctx.strokeStyle = "black";
    }
    ctx.beginPath();
    ctx.moveTo(hud.life.x3 - (hud.life.x3 - hud.life.x1) * 1/3, hud.life.y3);
    ctx.lineTo(hud.life.x1 + (hud.life.x3 - hud.life.x1) / 2, hud.life.y1 - ((hud.life.x3 - hud.life.x1) / 2) ** 2 / (Math.sqrt((hud.life.x3 - hud.life.x1) ** 2 - ((hud.life.x3 - hud.life.x1) / 2) ** 2)));
    ctx.lineTo(hud.life.x3 - (hud.life.x3 - hud.life.x1) / 3, hud.life.y2 + ((hud.life.x3 - hud.life.x1) / 2) ** 2 / (Math.sqrt((hud.life.x3 - hud.life.x1) ** 2 - ((hud.life.x3 - hud.life.x1) / 2) ** 2)));
    ctx.lineTo(hud.life.x3, hud.life.y3);
    ctx.closePath();
    if (player[0].lives < 3) {
        ctx.fill();
    } else {
        ctx.stroke();
    }
}

function drawPause() {
    // Background Box
    ctx.fillStyle = "black";
    ctx.fillRect(pauseScreen.resumeBtn.x - 100, pauseScreen.resumeBtn.y - 50, cnv.width - 2 * (pauseScreen.resumeBtn.x - 100), (pauseScreen.restartBtn.y - pauseScreen.resumeBtn.y) * 2);

    // Resume Button
    ctx.font = "20px chunkyCPC";
    ctx.fillStyle = `${pauseScreen.resumeBtn.color}`;
    ctx.fillText(`RESUME`, pauseScreen.resumeBtn.x, pauseScreen.resumeBtn.y);

    // Restart Button
    ctx.font = "20px chunkyCPC";
    ctx.fillStyle = `${pauseScreen.restartBtn.color}`;
    ctx.fillText(`RESTART`, pauseScreen.restartBtn.x, pauseScreen.restartBtn.y);

    // Select Triangle
    ctx.strokeStyle = color.darkerGreen;
    ctx.beginPath();
    ctx.moveTo(pauseScreen.selector.x - 10, pauseScreen.selector.y - 5);
    ctx.lineTo(pauseScreen.selector.x - 20 - 10, pauseScreen.selector.y - 10 - 5);
    ctx.lineTo(pauseScreen.selector.x - 20 - 10, pauseScreen.selector.y + 10 - 5);
    ctx.closePath();
    ctx.stroke();
}

function drawLevelWin() {
    // Background
    ctx.fillStyle = "black";
    ctx.fillRect(0, 0, cnv.width, cnv.height);
        
    // Congratulations
    ctx.font = "20px chunkyCPC";
    ctx.fillStyle = color.white;
    ctx.fillText(`CONGRATULATIONS!`, 10, 150);

    // Final Score
    ctx.font = "15px chunkyCPC";
    ctx.fillStyle = color.white;
    ctx.fillText(`FINAL SCORE: ${Math.floor(player[0].score)}`, 10, 200);

    // Lives Left
    ctx.font = "15px chunkyCPC";
    ctx.fillStyle = color.white;
    ctx.fillText(`REMAINING LIVES: ${player[0].lives}`, 10, 250);

    // Time
    ctx.font = "15px chunkyCPC";
    ctx.fillStyle = color.white;
    ctx.fillText(`TIME: ${levelTime.toFixed(3)}`, 10, 300);
}

function drawGameOver() {
    // Game Over
    ctx.font = "30px chunkyCPC";
    ctx.fillStyle = `white`;
    ctx.fillText(`TRY AGAIN`, 70, 100);
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
    if (enemies[n].x > camera.x - 50 && enemies[n].x < camera.x + cnv.width + 50 && enemies[n].y > camera.y - 50 && enemies[n].y < camera.y + cnv.height + 50) {
        if (enemies[n].id === "discus") {
            ctx.lineWidth = 3;
            ctx.strokeStyle = enemies[n].color;
            ctx.beginPath();
            ctx.arc(enemies[n].x, enemies[n].y, enemies[n].r, 0, 2 * Math.PI);
            ctx.stroke();
        } else if (enemies[n].id === "big-boss") {
            ctx.lineWidth = 3;
            ctx.strokeStyle = enemies[n].color;
            ctx.beginPath();
            ctx.arc(enemies[n].x - enemies[n].w / 2, enemies[n].y, enemies[n].r, 0, 2 * Math.PI);
            ctx.closePath();
            ctx.stroke();

            ctx.lineWidth = 3;
            ctx.strokeStyle = enemies[n].color;
            ctx.beginPath();
            ctx.arc(enemies[n].x + enemies[n].w / 2, enemies[n].y, enemies[n].r, 0, 2 * Math.PI);
            ctx.closePath();
            ctx.stroke();

            ctx.fillStyle = enemies[n].color;
            ctx.fillRect(enemies[n].x - enemies[n].w / 2, enemies[n].y - enemies[n].h / 2, enemies[n].w, enemies[n].h);
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
    } else if (bullets[n].id === "rocket") {
        ctx.lineWidth = 3;
        ctx.strokeStyle = bullets[n].color;
        ctx.beginPath();
        ctx.arc(bullets[n].x, bullets[n].y, bullets[n].r, 0, 2 * Math.PI);
        ctx.closePath();
        ctx.stroke();
    }
}