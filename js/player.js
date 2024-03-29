function newPlayer(xP, yP, wP, hP, xVelP, yVelP, reloadTimerP, reloadTargetP, livesP, scoreP, multiplierP, shootP, upP, leftP, rightP, downP, slowP, lastHitP, invincibleP) {
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
        slow: slowP,
        lastHit: lastHitP,
        invincible: invincibleP
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
    if (player[n].x < 10) {
        player[n].x = 10;
    } else if (player[n].x > cnv.width - 10) {
        player[n].x = cnv.width - 10;
    }

    if (player[n].y < 10) {
        player[n].y = 10;
    } else if (player[n].y + player[n].h / 2 > cnv.height) {
        player[n].y = cnv.height - player[n].h / 2;
    }
}

function playerScore(n) {
    player[0].score += enemies[n].points * player[0].multiplier;
    player[0].multiplier += enemies[n].points * 0.01;

    if (player[0].multiplier > 10) {
        player[0].multiplier = 10;
    }
}

function playerDamaged(n) {
    if (levelTime > player[n].lastHit + 1.5) {
        player[n].lives--;
        player[n].lastHit = levelTime;
        player[n].invincible = true;
        playerDeath(n);
    }
}

function playerIFrames(n) {
    if (levelTime - player[n].lastHit > 1.5) {
        player[n].invincible = false;
    }
}

function playerDeath(n) {
    if (player[n].lives < 1) {
        player[0].lastHit = levelTime;
        state = "gameover";
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