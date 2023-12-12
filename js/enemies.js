let enemyTypes;
let enemyWaves;

fetch('json/enemyTypes.json')
    .then((res) => res.json())
    .then((data) => enemyTypes = data);

fetch('json/enemyFormation.json')
    .then((res) => res.json())
    .then((data) => enemyWaves = data);
    
function drawEnemies(n) {
    if (enemy[n].type === "discus") {
        ctx.lineWidth = 3;
        ctx.strokeStyle = enemies[i].color;
        ctx.beginPath();
        ctx.arc(enemies[i].x, enemies[i].y, enemies[i].r, 0, 2 * Math.PI);
        ctx.stroke();
    }
}

function customEnemies() {
    for (let i = 0; i < enemies.length; i++) {
        if (enemies[enemies.length - 1].type === enemyTypes[i].type) {
            enemies[enemies.length - 1].r = enemyTypes[i].r;
            enemies[enemies.length - 1].xVel = enemyTypes[i].xVel;
            enemies[enemies.length - 1].yVel = enemyTypes[i].yVel;
            enemies[enemies.length - 1].canShoot = enemyTypes[i].canShoot;
        }
    }
}

function enemyFormation() {
    for (let i = 0; i < enemyWaves.length; i++) {
        for (let j = 0; j < enemyWaves[i].length; j++) {
            // x, y, health, xVel, yVel, xDirection, yDirection, canShoot, reloadTimer, reloadTarget
            enemies.push(newEnemy(cnv.width / enemyWaves[i].length, 100, 5, 0, 0, 0, 1, false, 0, 0));
            customEnemies();
        }
    }
}