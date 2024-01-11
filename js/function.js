function drawStart() {
    drawMainComponents();

    // Start Text
    ctx.font = "40px Consolas";
    ctx.fillStyle = "rgb(25, 190, 40)";
    ctx.fillText("CLICK TO START", 100, cnv.height / 2);
}

function runGame() {
    if (currentLevel !== undefined) {
        levelSequencer();
    }
    
    levelTimer(true);

    collision();

    drawMainComponents();

    for (let i = 0; i < player.length; i++) {
        playerShoot(i);
        playerMovement(i);
        playerIFrames(i)
    }

    for (let i = 0; i < enemies.length; i++) {
        drawEnemies(i);
        enemyMovement(i);
        // killEnemy(i);
        removeEnemies(i);
    }

    for (let i = 0; i < bullets.length; i++) {
        drawBullets(i);
        bulletMovement(i);
    }

    // console.log(player[0].lives);
    console.log(keys.j, mouseIsPressed);
}

function pauseGame() {
    drawPause();
}

function drawGameOver() {

}

function reset() {
    state = "start";

    keys = {
        w: false,
        a: false,
        d: false,
        s: false,
        j: false,
        p: false,
        space: false,
        escape: false,
        shiftLeft: false
    };

    camera = {
        x: 0,
        y: 0
    };

    levelTime = 0;

    player = [];
    // (x, y, width, height, xVelocity, yVelocity, reloadTime, reloadTarget, lives, score, multiplier, shoot, up, left, right, down, slow)
    player.push(newPlayer(cnv.width / 2, 580, 20, 50, 0.25, 0.25, 0, 0, 3, 0, 1, false, false, false, false, false, false, 0, false));

    enemies = [];

    bullets = [];

    color = {
                darkerGreen: "rgb(63, 142, 111)",
                teal: "rgb(95, 207, 169)",
                mint: "rgb(152, 232, 193)",
                white: "rgb(255, 255, 255)",
                babyBlue: "rgb(123, 173, 224)",
                indigo: "rgb(80, 100, 233)",
                violet: "rgb(90, 66, 180)"
            };
}