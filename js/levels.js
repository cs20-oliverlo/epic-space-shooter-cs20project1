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
}

function levelSequencer() {
    for (let i = 0; i < currentLevel.length; i++) {
        // Delay Wave
        if (levelTime >= currentLevel[i][0].time && currentLevel[i][0].loaded === false) {
            // Load Wave
            enemyFormation(i);
            currentLevel[i][0].loaded = true;
            return;
        }
    }
}

function levelTimer(state) {
    if (state === true) {
        levelTime += deltaTime / 1000;
    }
}