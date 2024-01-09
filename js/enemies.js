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

function enemyMovement(n) {
    if (enemies[n].id === "discus") {
        enemies[n].x += enemies[n].xVel * enemies[n].xDirection * deltaTime;
        enemies[n].y += enemies[n].yVel * enemies[n].yDirection * deltaTime;
    }
}

function killEnemy(n) {
    if (enemies[n].health <= 0) {
        if (enemies[n].id === "discus") {
            enemies.splice(n, 1);
        }
    }
}

function customEnemies(n) {
    for (let i = 0; i < enemyType.length; i++) {
        if (enemies[enemies.length - 1].id === enemyType[i].id) {
            enemies[enemies.length - 1].r = enemyType[i].r;
            enemies[enemies.length - 1].health = enemyType[i].health;
            enemies[enemies.length - 1].xVel = enemyType[i].xVel;
            enemies[enemies.length - 1].yVel = enemyType[i].yVel;
            enemies[enemies.length - 1].canShoot = enemyType[i].canShoot;
        } else {
            enemies.pop(enemies.length - 1);
        }

        if (enemies[enemies.length - 1].x === 0) {
            if (enemies[enemies.length - 1].yDirection === -1) {
                enemies[enemies.length - 1].y += n + cnv.height;
            } else if (enemies[enemies.length - 1].yDirection === 1) {
                enemies[enemies.length - 1].y += -n;
            }
        } else if (enemies[enemies.length - 1].y === 0) {
            if (enemies[enemies.length - 1].yDirection === -1) {
                enemies[enemies.length - 1].y += n + cnv.height;
            } else if (enemies[enemies.length - 1].yDirection === 1) {
                enemies[enemies.length - 1].y += -n;
            }
        }
    }
}

function enemyFormation(n1) {
    for (let i = 1; i < currentLevel[n1].length; i++) {
        let enemyWaves = currentLevel[n1];
        let n = (i + 1) * 50;
    
        for (let j = 0; j < enemyWaves[i].length; j++) {
            // x, y, w, h, r, color, health, id, xVel, yVel, xDirection, yDirection, canShoot, reloadTimer, reloadTarget
            if (enemyWaves[i][j].xDirection === 0) {
                enemies.push(newEnemy(cnv.width / (enemyWaves[i].length + 1) + (j * cnv.width / (enemyWaves[i].length + 1)), 0, 0, 0, 0, "white", 10, enemyWaves[i][j].id, 0, 0, enemyWaves[i][j].xDirection, enemyWaves[i][j].yDirection, false, 0, 0));
            } else if (enemyWaves[i][j].yDirection === 0) {
                enemies.push(newEnemy(0, cnv.width / (enemyWaves[i].length + 1) + (j * cnv.width / (enemyWaves[i].length + 1)), 0, 0, 0, "white", 10, enemyWaves[i][j].id, 0, 0, enemyWaves[i][j].xDirection, enemyWaves[i][j].yDirection, false, 0, 0));
            }
            customEnemies(n);
        }
    }
}