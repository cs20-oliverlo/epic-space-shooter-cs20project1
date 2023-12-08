let bulletType;

fetch('json/bulletTypes.json')
    .then((res) => res.json())
    .then((data) => bulletType = data);

function drawBullets(n) {
    if (bullets[n].type === "laser") {
        ctx.lineWidth = 3;
        ctx.strokeStyle = bullets[n].color;
        ctx.beginPath();
        ctx.moveTo(bullets[n].x, bullets[n].y);
        ctx.lineTo(bullets[n].x, bullets[n].y + bullets[n].h);
        ctx.stroke();
    }
    console.log(bullets);
}

function customBullet(n) {
    for (let i = 0; i < bulletType.length; i++) {
        if (bullets[bullets.length - 1].type === bulletType[i].type) {
            bullets[bullets.length - 1].h = bulletType[i].h;
            bullets[bullets.length - 1].yVel = bulletType[i].yVel;
            bullets[bullets.length - 1].color = color.teal;
        }
    }

    if (bullets[bullets.length - 1].team === "player") {
        bullets[bullets.length - 1].x = player[n].x;
        bullets[bullets.length - 1].y = player[n].y  - bullets[bullets.length - 1].h;
        bullets[bullets.length - 1].direction = -1;
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