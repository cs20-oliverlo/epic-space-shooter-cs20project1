function drawStart() {
    drawMainComponents();

    // Start Text
    ctx.font = "40px Consolas";
    ctx.fillStyle = "rgb(25, 190, 40)";
    ctx.fillText("CLICK TO START", 100, cnv.height / 2);
}

function runGame() {
    drawMainComponents();

    for (let i = 0; i < player.length; i++) {
        playerMovement(i);
        playerShoot(i);
    }

    for (let i = 0; i < bullets.length; i++) {
        drawBullets(i);
        bulletMovement(i);
        bulletDetection(i);
    }
}

function pauseGame() {

}

function drawGameOver() {

}

function drawMainComponents() {
    // Background
    ctx.fillStyle = "grey";
    ctx.fillRect(0, 0, cnv.width, cnv.height);
    
    drawPlayer();
}

function drawPlayer() {
    // Thruster
    ctx.lineWidth = 2;
    ctx.strokeStyle = "red";
    ctx.beginPath();
    ctx.moveTo(11.5 + player[0].x, 25 + player[0].y);
    ctx.lineTo(0 + player[0].x, 35 + player[0].y);
    ctx.lineTo(-11.5 + player[0].x, 25 + player[0].y);
    ctx.stroke();

    // Ship
    ctx.lineWidth = 2;
    ctx.strokeStyle = "black";
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
        player[n].y -= player[0].yVel;
    }
    if (player[n].left === true) {
        player[n].x -= player[0].xVel;
    }
    if (player[n].right === true) {
        player[n].x += player[0].xVel;
    }
    if (player[n].down === true) {
        player[n].y += player[0].yVel;
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
    if (player[n].reloadTimer >= player[n].reloadTarget && player[n].shoot === true) {
        // (x, y, width, height, radius, color, team, type, xVelocity, yVelocity, direction)
        bullets.push(newBullet(0, 0, 0, 0, 0, "white", "player", "laser", 0, 0, 0));
        customBullet(n);   
        player[n].reloadTimer = 0;
    }

    player[n].reloadTimer++;
}

function customBullet(n) {
    if (bullets[bullets.length - 1].type === "laser") {
        bullets[bullets.length - 1].h = 50;
        bullets[bullets.length - 1].yVel = 30;
        bullets[bullets.length - 1].color = "darkred";
    }
    if (bullets[bullets.length - 1].team === "player") {
        bullets[bullets.length - 1].x = player[n].x;
        bullets[bullets.length - 1].y = player[n].y  - bullets[bullets.length - 1].h;
        bullets[bullets.length - 1].direction = -1;
    }
}

function drawBullets(n) {
    if (bullets[n].type === "laser") {
        ctx.lineWidth = 3;
        ctx.strokeStyle = bullets[n].color;
        ctx.beginPath();
        ctx.moveTo(bullets[n].x, bullets[n].y);
        ctx.lineTo(bullets[n].x, bullets[n].y + bullets[n].h);
        ctx.stroke();
    }
}

function bulletMovement(n) {
    bullets[n].x += bullets[n].xVel;
    bullets[n].y += bullets[n].yVel * bullets[n].direction;
}

function bulletDetection(n) {
    if (bullets[n].y + bullets[n].h < 0) {
        bullets.splice(n, 1);
    }
}

function newPlayer(xP, yP, wP, hP, xVelP, yVelP, reloadTimerP, reloadTargetP, livesP, shootP, upP, leftP, rightP, downP) {
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
        shoot: shootP,
        up: upP,
        left: leftP,
        right: rightP,
        down: downP
    }
}

function newBullet(xP, yP, wP, hP, rP, colorP, teamP, typeP, xVelP, yVelP, directionP) {
    return {
        x: xP,
        y: yP,
        w: wP,
        h: hP,
        r: rP,
        color: colorP,
        team: teamP,
        type: typeP,
        xVel: xVelP,
        yVel: yVelP,
        direction: directionP
    }
}

function reset() {
    state = "start";

    keys = {
        w: false,
        a: false,
        d: false,
        s: false,
        space: false,
        shiftLeft: false
    };

    camera = {
        x: 0,
        y: 0
    };

    player = [];
    // (x, y, width, height, xVelocity, yVelocity, reloadTime, reloadTarget, shoot, up, left, right down)
    player.push(newPlayer(cnv.width / 2, 580, 20, 50, 7, 7, 5, 5, 3, false, false, false, false, false));

    bullets = [];
}