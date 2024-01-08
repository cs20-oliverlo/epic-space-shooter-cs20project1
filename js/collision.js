function collision() {
    for (let i = 0; i < bullets.length; i++) {
        bulletDetection(i);
    }
}

function bulletDetection(n) {
    if (bullets[n].type === "laser") {
        for (let i = 0; i < enemies.length; i++) {
            if (enemy.type === "discus") {
                if (bullets[n].x > enemies[n].x - enemies[n].r && bullets[n].x < enemies[n].x + enemies[n].r && bullets[n].y < enemies[n].y + enemies[n].r && bullets[n].y + bullets[n].h > enemies[n].y - enemies[n].r) {
                    enemies[n].health -= bullets[n].damage;
                }
                bullets.splice(n, 1);
            }
        }
    } else if (bullets[n].y + bullets[n].h < 0) {
        bullets.splice(n, 1);
    }
}