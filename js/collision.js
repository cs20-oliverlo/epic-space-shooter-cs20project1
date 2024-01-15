function collision() {
    for (let i = 0; i < enemies.length; i++) {
        enemyPlayerCollision(i);
    }

    for (let i = 0; i < bullets.length; i++) {
        bulletDetection(i);
    }
}

function bulletDetection(n) {
    if (bullets[n].id === "laser") {
        if (bullets[n].y + bullets[n].h < 0) {
            bullets.splice(n, 1);
        } else {
            for (let i = 0; i < enemies.length; i++) {
                if (enemies[i].id === "discus" && bullets[n].x > enemies[i].x - enemies[i].r && bullets[n].x < enemies[i].x + enemies[i].r && bullets[n].y < enemies[i].y + enemies[i].r && bullets[n].y + bullets[n].h > enemies[i].y - enemies[i].r) {
                    enemies[i].health -= bullets[n].damage;
                    killEnemy(i);
                    bullets.splice(n, 1);
                    return;
                } else if (enemies[i].id === "big-boss" && bullets[n].x > enemies[i].x - enemies[i].r - enemies[i].w / 2 && bullets[n].x < enemies[i].x + enemies[i].r + enemies[i].w / 2 && bullets[n].y < enemies[i].y + enemies[i].h / 2 - 10 && bullets[n].y + bullets[n].h > enemies[i].y - enemies[i].h / 2) {
                    enemies[i].health -= bullets[n].damage;
                    killEnemy(i);
                    bullets.splice(n, 1);
                }
            }
        }
    } else if (bullets[n].id === "rockets") {
        if (bullets[n].x + bullets[n].r < 0 || bullets[n].x + bullets[n].r > cnv.width || bullets[n].y + bullets[n].r < 0 || bullets[n].y + bullets[n].r > cnv.width) {
            bullets.splice(n, 1);
        } else if (player[i].y - 5 < bullets[n].y + bullets[n].r && player[i].y - 5 > bullets[n].y - bullets[n].r && player[i].x - 5 < bullets[n].x + bullets[n].r && player[i].x + 5 > bullets[n].x - bullets[n].r) {
            playerDamaged(i);
        } else if (player[i].y + 5 < bullets[n].y + bullets[n].r && player[i].y + 5 > bullets[n].y - bullets[n].r && player[i].x - 5 < bullets[n].x + bullets[n].r && player[i].x + 5 > bullets[n].x - bullets[n].r) {
            playerDamaged(i);
        }
    }
}

function enemyPlayerCollision(n) {
    for (let i = 0; i < player.length; i++) {
        if (enemies[n].id === "discus") {
            if (player[i].y - 5 < enemies[n].y + enemies[n].r && player[i].y - 5 > enemies[n].y - enemies[n].r && player[i].x - 5 < enemies[n].x + enemies[n].r && player[i].x + 5 > enemies[n].x - enemies[n].r) {
                playerDamaged(i);
            } else if (player[i].y + 5 < enemies[n].y + enemies[n].r && player[i].y + 5 > enemies[n].y - enemies[n].r && player[i].x - 5 < enemies[n].x + enemies[n].r && player[i].x + 5 > enemies[n].x - enemies[n].r) {
                playerDamaged(i);
            }
        }
    }
}