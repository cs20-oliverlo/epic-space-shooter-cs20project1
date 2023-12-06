function drawStart() {
    drawMainComponents();

    // Start Text
    ctx.font = "40px Consolas";
    ctx.fillStyle = "rgb(25, 190, 40)";
    ctx.fillText("CLICK TO START", 100, cnv.height / 2);
}

function runGame() {
    drawMainComponents();

    for (let i = 0; i < player.length; i++) {
        playerMovement(i);
        playerShoot(i);
    }

    for (let i = 0; i < bullets.length; i++) {
        drawBullets(i);
        bulletMovement(i);
    }
}

function pauseGame() {

}

function drawGameOver() {

}

function drawMainComponents() {
    // Background
    ctx.fillStyle = "black";
    ctx.fillRect(0, 0, cnv.width, cnv.height);
    
    drawPlayer();
}

function drawPlayer() {
    // Thruster
    ctx.lineWidth = 2;
    ctx.strokeStyle = "rgb(50, 130, 255)";
    ctx.beginPath();
    ctx.moveTo(11.5 + player[0].x, 25 + player[0].y);
    ctx.lineTo(0 + player[0].x, 35 + player[0].y);
    ctx.lineTo(-11.5 + player[0].x, 25 + player[0].y);
    ctx.stroke();

    // Ship
    ctx.lineWidth = 2;
    ctx.strokeStyle = "red";
    ctx.beginPath();
    ctx.moveTo(0 + player[0].x, 0 + player[0].y);
    ctx.lineTo(player[0].w / 2 + player[0].x, player[0].h / 2 + player[0].y);
    ctx.lineTo(0 + player[0].x, 20 + player[0].y);
    ctx.lineTo(-player[0].w / 2 + player[0].x, player[0].h / 2 + player[0].y);
    ctx.closePath(); // Go back to start
    ctx.stroke();
}

function playerMovement(n) {
    if (player[n].up === true) {
        player[n].y -= player[0].yVel;
    }
    if (player[n].left === true) {
        player[n].x -= player[0].xVel;
    }
    if (player[n].right === true) {
        player[n].x += player[0].xVel;
    }
    if (player[n].down === true) {
        player[n].y += player[0].yVel;
    }

    if (player[n].x < 0) {
        player[n].x = 0;
    } else if (player[n].x > cnv.width) {
        player[n].x = cnv.width;
    }

    if (player[n].y + player[n].h / 2 < 0) {
        player[n].y = 0 - player[n].h / 2;
    } else if (player[n].y + player[n].h / 2 > cnv.height) {
        player[n].y = cnv.height - player[n].h / 2;
    }
}

function playerShoot(n) {
    if (player[n].shoot === true) {
        bullets.push(newBullet(player[n].x, player[n].y, 0, "player", "laser"));
    }
}

function drawBullets(n) {
    if (bullets[n].type === "laser") {
        ctx.lineWidth = 3;
        if (bullets[n].team === "player") {
            ctx.strokeStyle = "rgb(200, 75, 12)";
        } else if (bullets[n].team === "enemy") {
            ctx.strokeStyle = "red";
        }
        ctx.beginPath();
        ctx.moveTo(bullets[n].x, bullets[n].y);
        ctx.lineTo(bullets[n].x, bullets[n].y + 50);
        ctx.stroke();
    }
}

function bulletMovement(n) {
    if (bullets[n].type === "laser") {
        
    }    
}

function newPlayer(xP, yP, wP, hP, xVelP, yVelP, livesP, shootP, upP, leftP, rightP, downP) {
    return {
        x: xP,
        y: yP,
        w: wP,
        h: hP,
        xVel: xVelP,
        yVel: yVelP,
        lives: livesP,
        shoot: shootP,
        up: upP,
        left: leftP,
        right: rightP,
        down: downP
    }
}

function newBullet(xP, yP, rP, teamP, typeP) {
    return {
        x: xP,
        y: yP,
        r: rP,
        team: teamP,
        type: typeP
    }
}

function reset() {
    state = "start";

    keys = {
        w: false,
        a: false,
        d: false,
        s: false,
        space: false,
        shiftLeft: false
    };

    camera = {
        x: 0,
        y: 0
    };

    player = [];
    player.push(newPlayer(cnv.width / 2, 580, 20, 50, 5, 5, 3, false, false, false, false, false));

    bullets = [];
}