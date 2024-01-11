function collision() {
    // for (let i = 0; i < enemies.length; i++) {
    //     enemyPlayerCollision(i);
    // }

    for (let i = 0; i < bullets.length; i++) {
        bulletDetection(i);
    }
}

function bulletDetection(n) {
    if (bullets[n].y + bullets[n].h < 0) {
        bullets.splice(n, 1);
    } else {
        for (let i = 0; i < enemies.length; i++) {
            if (enemies[i].id === "discus" && bullets[n].x > enemies[i].x - enemies[i].r && bullets[n].x < enemies[i].x + enemies[i].r && bullets[n].y < enemies[i].y + enemies[i].r && bullets[n].y + bullets[n].h > enemies[i].y - enemies[i].r) {
                enemies[i].health -= bullets[n].damage;
                killEnemy(i);
                bullets.splice(n, 1);
                return;
            }
        }
    }
}

function enemyPlayerCollision(n) {
    for (let i = 0; i < player[i].length; i++) {
        if (enemies[n].id === "discus") {
            if (player[i].y - 5 < enemies[n].y + enemies[n].r && player[i].y - 5 > enemies[n].y - enemies[n].r && player[i].x + 5 < enemies[n].x + enemies[n].r && player[i].x + 5 > enemies[n].x - enemies[n].r) {
                player[i].lives--;
            }
            if (player[i].y + player[i].h > enemies[n].y && player[i].y + player[i].h < enemies[n].y + enemies[n].h && player[i].x + player[i].v < enemies[n].x + enemies[n].w && player[i].x + player[i].w - player[i].v > enemies[n].x) {
                player[i].lives--;
            }
            if (player[i].x < enemies[n]. x + enemies[n].w && player[i].x > enemies[n].x && player[i].y < enemies[n].y + enemies[n].h && player[i].y + player[i].h > enemies[n].y) {
                player[i].lives--;
            }
            if (player[i].x + player[i].w > enemies[n]. x && player[i].x + player[i].w  < enemies[n].x + enemies[n].w && player[i].y < enemies[n].y + enemies[n].h && player[i].y + player[i].h > enemies[n].y) {
                player[i].lives--;
            }
        }
    }
}