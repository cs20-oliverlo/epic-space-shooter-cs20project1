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
        playerShoot(i);
        playerMovement(i);
    }

    for (let i = 0; i < enemies.length; i++) {
        drawEnemies(i);
    }

    for (let i = 0; i < bullets.length; i++) {
        drawBullets(i);
        bulletMovement(i);
        bulletDetection(i);
    }

    // levelSequencer("level1");
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

function newEnemy(xP, yP, wP, hP, rP, colorP, healthP, idP, xVelP, yVelP, xDirectionP, yDirectionP, canShootP, reloadTimerP, reloadTargetP) {
    return {
        x: xP,
        y: yP,
        w: wP,
        h: hP,
        r: rP,
        color: colorP,
        health: healthP,
        id: idP,
        xVel: xVelP,
        yVel: yVelP,
        xDirection: xDirectionP,
        yDirection: yDirectionP,
        canShoot: canShootP,
        reloadTimer: reloadTimerP,
        reloadTarget: reloadTargetP
    }
}

function newBullet(xP, yP, wP, hP, rP, colorP, teamP, idP, xVelP, yVelP, directionP) {
    return {
        x: xP,
        y: yP,
        w: wP,
        h: hP,
        r: rP,
        color: colorP,
        team: teamP,
        id: idP,
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
    player.push(newPlayer(cnv.width / 2, 580, 20, 50, 1/3, 1/3, 0.01, 50, 3, false, false, false, false, false));

    enemies = [];
    enemyWaves = [];

    bullets = [];

    color = {
                darkerGreen: "rgb(63, 142, 111)",
                teal: "rgb(95, 207, 169)",
                mint: "rgb(152, 232, 193)",
                white: "rgb(255, 255, 255)",
                babyBlue: "rgb(123, 173, 224)",
                indigo: "rgb(80, 73, 203)",
                violet: "rgb(60, 26, 120)"
            };
}