function runGame() {
    if (currentLevel !== undefined) {
        levelSequencer();
    }
    
    levelTimer(true);

    collision();

    drawMainComponents();

    for (let i = 0; i < player.length; i++) {
        drawPlayer(i);
        playerShoot(i);
        playerMovement(i);
        playerIFrames(i);
    }

    for (let i = 0; i < enemies.length; i++) {
        drawEnemies(i);
        enemyMovement(i);
        enemyShoot(i);
        // killEnemy(i);
        removeEnemies(i);
    }

    for (let i = 0; i < bullets.length; i++) {
        drawBullets(i);
        bulletMovement(i);
    }

    // HUD, Pause Screen
    if (state === "gameon") {
        drawHeadUpsDisplay();
    } else if (state === "pause") {
        drawPause();
    }

    console.log(bullets.length);
}

function pauseGame() {
    drawPause();
}

function levelWin() {
    drawLevelWin();
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
        shiftLeft: false
    };

    camera = {
        x: 0,
        y: 0
    };

    levelTime = 0;

    hud = {
        life: {
            x1: 10,
            y1: cnv.height - 10,
            x2: 25,
            y2: cnv.height - 10 - (Math.sqrt(30 ** 2 - 15 ** 2)),
            x3: 40,
            y3: cnv.height - 10,
        }
    };

    pauseScreen = {
        selector: {
            X: 0,
            y: 0,
            color: "white"
        },
        resumeBtn: {
            x: cnv.width / 2 - 80,
            y: cnv.height / 2 - 40,
            color: "white"
        },
        restartBtn: {
            x: cnv.width / 2 - 90,
            y: cnv.height / 2 + 40,
            color: "white"
        }
    };

    player = [];
    // (x, y, width, height, xVelocity, yVelocity, reloadTimer, reloadTarget, lives, score, multiplier, shoot, up, left, right, down, slow, lastHit, invincible)
    player.push(newPlayer(cnv.width / 2, 580, 20, 50, 0.25, 0.25, 0, 0.5, 3, 0, 1, false, false, false, false, false, false, 0, false));

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

    startLevel();
}