function loadLevel(level) {
    let newLevel;

    fetch(`json/levels/${level}.json`)
        .then((res) => res.json())
        .then((data) => newLevel = data)

    if (newLevel !== undefined) {
        fetch(`json/levels/${level}.json`)
            .then((res) => res.json())
            .then((data) => currentLevel = data)
    }
    console.log(currentLevel, newLevel, level);
}

function levelSequencer() {
    for (let i = currentLevel.length - 1; i > -1; i--) {
        console.log(levelTime, enemies.length);
        // Delay Wave
        if (levelTime >= currentLevel[i][0] + 0.005 && levelTime <= currentLevel[i][0] - 0.005) {
            // Load Wave
            enemyFormation(i);
            console.log("did the thing");
            return;
        }
    }
    console.log("once");
}

function levelTimer(state) {
    if (state === true) {
        levelTime += deltaTime / 1000;
    }
}