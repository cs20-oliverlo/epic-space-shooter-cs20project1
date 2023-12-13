function drawPlayer() {
    // Thruster
    ctx.lineWidth = 2;
    ctx.strokeStyle = color.babyBlue;
    ctx.beginPath();
    ctx.moveTo(11.5 + player[0].x, 25 + player[0].y);
    ctx.lineTo(0 + player[0].x, 35 + player[0].y);
    ctx.lineTo(-11.5 + player[0].x, 25 + player[0].y);
    ctx.stroke();

    // Ship
    ctx.lineWidth = 2;
    ctx.strokeStyle = color.darkerGreen;
    ctx.beginPath();
    ctx.moveTo(0 + player[0].x, 0 + player[0].y);
    ctx.lineTo(player[0].w / 2 + player[0].x, player[0].h / 2 + player[0].y);
    ctx.lineTo(0 + player[0].x, 20 + player[0].y);
    ctx.lineTo(-player[0].w / 2 + player[0].x, player[0].h / 2 + player[0].y);
    ctx.closePath();
    ctx.stroke();
}

function playerMovement(n) {
    if (player[n].up === true) {
        player[n].y -= player[0].yVel * deltaTime;
    }
    if (player[n].left === true) {
        player[n].x -= player[0].xVel * deltaTime;
    }
    if (player[n].right === true) {
        player[n].x += player[0].xVel * deltaTime;
    }
    if (player[n].down === true) {
        player[n].y += player[0].yVel * deltaTime;
    }

    if (player[n].x < 0) {
        player[n].x = 0;
    } else if (player[n].x > cnv.width) {
        player[n].x = cnv.width;
    }

    if (player[n].y + player[n].h / 2 < 0) {
        player[n].y = 0 - player[n].h / 2;
    } else if (player[n].y + player[n].h / 2 > cnv.height) {
        player[n].y = cnv.height - player[n].h / 2;
    }
}

function playerShoot(n) {
    if (player[n].reloadTimer * deltaTime >= player[n].reloadTarget && player[n].shoot === true) {
        // (x, y, width, height, radius, color, team, type, xVelocity, yVelocity, direction)
        bullets.push(newBullet(0, 0, 0, 0, 0, "white", "player", "laser", 0, 0, 0));
        customBullet(n);
        bullets[bullets.length - 1].x -= 10;
        bullets.push(newBullet(0, 0, 0, 0, 0, "white", "player", "laser", 0, 0, 0));
        customBullet(n);
        bullets[bullets.length - 1].x += 10;
        player[n].reloadTimer = 0;
    }

    player[n].reloadTimer++;
}