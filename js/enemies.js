let enemyType;

fetch('json/enemyTypes.json')
    .then((res) => res.json())
    .then((data) => enemyType = data);

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

function drawEnemies(n) {
    if (enemies[n].id === "discus") {
        ctx.lineWidth = 3;
        ctx.strokeStyle = enemies[n].color;
        ctx.beginPath();
        ctx.arc(enemies[n].x, enemies[n].y, enemies[n].r, 0, 2 * Math.PI);
        ctx.stroke();
    }
}

function customEnemies() {
    for (let i = 0; i < enemyType.length; i++) {
        if (enemies[enemies.length - 1].id === enemyType[i].id) {
            enemies[enemies.length - 1].r = enemyType[i].r;
            enemies[enemies.length - 1].xVel = enemyType[i].xVel;
            enemies[enemies.length - 1].yVel = enemyType[i].yVel;
            enemies[enemies.length - 1].canShoot = enemyType[i].canShoot;
        } else {
            enemies[enemies.length - 1].pop;
        }
    }
}

function enemyFormation(n1, n2) {
    let enemyWaves = currentLevel[n1];

    for (let i = 0; i < enemyWaves[n2].length; i++) {
        // x, y, w, h, r, color, health, id, xVel, yVel, xDirection, yDirection, canShoot, reloadTimer, reloadTarget
        enemies.push(newEnemy(480 / (enemyWaves[n2].length + 1) + (i*480/(enemyWaves[n2].length + 1)), 100, 0, 0, 0, "white", 10, enemyWaves[n2][i], 0, 0, 0, 1, false, 0, 0));
        customEnemies();
    }
}


// [[
//     5,
//     [0, "discus", 0],
//     [0, 0, 0],
//     [0, 0, 0]
// ], [
//     2,
//     [0, "discus", 0],
//     [0, 0, 0],
//     [0, 0, 0]
// ]]