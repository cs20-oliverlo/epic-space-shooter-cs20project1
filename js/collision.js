function collision() {
    for (let i = 0; i < bullets.length; i++) {
        bulletDetection(i);
    }
}

function bulletDetection(n) {
    if (bullets[n].y + bullets[n].h < 0) {
        bullets.splice(n, 1);
        console.log("border");
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