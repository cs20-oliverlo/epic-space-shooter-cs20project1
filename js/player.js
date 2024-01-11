function newPlayer(xP, yP, wP, hP, xVelP, yVelP, reloadTimerP, reloadTargetP, livesP, scoreP, multiplierP, shootP, upP, leftP, rightP, downP, slowP) {
    return {
        x: xP,
        y: yP,
        w: wP,
        h: hP,
        xVel: xVelP,
        yVel: yVelP,
        reloadTimer: reloadTimerP,
        reloadTarget: reloadTargetP,
        lives: livesP,
        score: scoreP,
        multiplier: multiplierP,
        shoot: shootP,
        up: upP,
        left: leftP,
        right: rightP,
        down: downP,
        slow: slowP
    }
}

function playerMovement(n) {
    // Movement
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

    // Slow Down
    if (player[n].slow === true) {
        player[n].xVel = 0.25 / 1.5;
        player[n].yVel = 0.25 / 1.5;
    } else {
        player[n].xVel = 0.25;
        player[n].yVel = 0.25;
    }

    // Canvas/Camera Borders
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
        // (x, y, width, height, radius, damage, color, team, type, xVelocity, yVelocity, direction)
        bullets.push(newBullet(0, 0, 0, 0, 0, 5, "white", "player", "laser", 0, 0, 0));
        customBullet(n);
        bullets[bullets.length - 1].x -= 10;
        bullets.push(newBullet(0, 0, 0, 0, 0, 5, "white", "player", "laser", 0, 0, 0));
        customBullet(n);
        bullets[bullets.length - 1].x += 10;
        player[n].reloadTimer = 0;
    }

    player[n].reloadTimer++;
}