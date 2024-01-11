// Loading JSONs
let bulletType;

fetch('json/bulletTypes.json')
    .then((res) => res.json())
    .then((data) => bulletType = data);

// Actual JS
function newBullet(xP, yP, wP, hP, rP, damageP, colorP, teamP, idP, xVelP, yVelP, directionP) {
    return {
        x: xP,
        y: yP,
        w: wP,
        h: hP,
        r: rP,
        damage: damageP,
        color: colorP,
        team: teamP,
        id: idP,
        xVel: xVelP,
        yVel: yVelP,
        direction: directionP
    }
}

function customBullet(n) {
    for (let i = 0; i < bulletType.length; i++) {
        if (bullets[bullets.length - 1].id === bulletType[i].id) {
            bullets[bullets.length - 1].h = bulletType[i].h;
            bullets[bullets.length - 1].damage = bulletType[i].damage;
            bullets[bullets.length - 1].yVel = bulletType[i].yVel;
        }

        if (bullets[bullets.length - 1].team === "player" && bullets[bullets.length - 1].type === bulletType[i].type) {
            player[n].reloadTarget = bulletType[i].reloadTarget;
        }
    }

    bullets[bullets.length - 1].color = color.teal;

    if (bullets[bullets.length - 1].team === "player") {
        bullets[bullets.length - 1].x = player[n].x;
        bullets[bullets.length - 1].y = player[n].y  - bullets[bullets.length - 1].h;
        bullets[bullets.length - 1].direction = -1;
    }

    if (bullets[bullets.length - 1].team === "enemy") {
        bullets[bullets.length - 1].x = player[n].x;
        bullets[bullets.length - 1].y = player[n].y  - bullets[bullets.length - 1].h;
        bullets[bullets.length - 1].direction = 1;
    }
}

function bulletMovement(n) {
    bullets[n].x += bullets[n].xVel * deltaTime;
    bullets[n].y += bullets[n].yVel * bullets[n].direction * deltaTime;
}