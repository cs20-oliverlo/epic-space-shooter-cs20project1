let enemyTypes;

fetch('json/enemyTypes.json')
    .then((res) => res.json())
    .then((data) => enemyTypes = data);
    
function drawEnemies(n) {
    if (enemy[n].type === "discus") {
        ctx.lineWidth = 3;
        ctx.strokeStyle = enemies[i].color;
        ctx.beginPath();
        ctx.arc(enemies[i].x, enemies[i].y, enemies[i].r, 0, 2 * Math.PI);
        ctx.stroke();
    }
}

function customEnemies(n) {
    for (let i = 0; i < bullets.length; i++) {
        if (bullets[bullets.length - 1].type === bulletType[i].type) {
            bullets[bullets.length - 1].r = bulletType[i].r;
            bullets[bullets.length - 1].xVel = bulletType[i].xVel;
            bullets[bullets.length - 1].yVel = bulletType[i].yVel;
            bullets[bullets.length - 1].color = color.teal;
        }
    }
}