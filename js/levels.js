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
        if (levelTime >= currentLevel[i][0] && currentLevel[i][currentLevel[i].length - 1] === false) {
            // Load Wave
            enemyFormation(i);
            // console.log(currentLevel[i]);
            currentLevel[i][currentLevel[i].length - 1] = true;
            return;
        }
    }
}

function levelTimer(state) {
    if (state === true) {
        levelTime += deltaTime / 1000;
    }
}