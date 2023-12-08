let enemyTypes;

fetch('json/enemyTypes.json')
    .then((res) => res.json())
    .then((data) => enemyTypes = data);

function drawEnemies(n) {
    if (enemy[n].type === "laser") {
        ctx.lineWidth = 3;
        ctx.strokeStyle = enemy[n].color;
    }
}

function customEnemies(n) {
    if (bullets[bullets.length - 1].type === "laser") {
        bullets[bullets.length - 1].h = 50;
        bullets[bullets.length - 1].yVel = 30;
        bullets[bullets.length - 1].color = color.teal;
    }
    if (bullets[bullets.length - 1].team === "player") {
        bullets[bullets.length - 1].x = player[n].x;
        bullets[bullets.length - 1].y = player[n].y  - bullets[bullets.length - 1].h;
        bullets[bullets.length - 1].direction = -1;
    }
}