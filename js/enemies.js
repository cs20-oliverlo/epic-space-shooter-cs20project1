let enemyType;

fetch('json/enemyTypes.json')
    .then((res) => res.json())
    .then((data) => enemyType = data);
    
function drawEnemies(n) {
    if (enemy[n].id === "discus") {
        ctx.lineWidth = 3;
        ctx.strokeStyle = enemies[i].color;
        ctx.beginPath();
        ctx.arc(enemies[i].x, enemies[i].y, enemies[i].r, 0, 2 * Math.PI);
        ctx.stroke();
    }
}

function customEnemies() {
    for (let i = 0; i < enemies.length; i++) {
        if (enemies[enemies.length - 1].id === enemyType[i].id) {
            enemies[enemies.length - 1].r = enemyType[i].r;
            enemies[enemies.length - 1].xVel = enemyType[i].xVel;
            enemies[enemies.length - 1].yVel = enemyType[i].yVel;
            enemies[enemies.length - 1].canShoot = enemyType[i].canShoot;
        }
    }
}

function enemyFormation(n) {
    for (let i = 0; i < enemyWaves[n].length; i++) {
        for (let j = 0; j < enemyWaves[n][i].length; j++) {
            // x, y, health, xVel, yVel, xDirection, yDirection, canShoot, reloadTimer, reloadTarget
            enemies.push(newEnemy(cnv.width / enemyWaves[n][i].length, 100, 5, 0, 0, 0, 1, false, 0, 0));
            customEnemies();
        }
    }
}