function startLevel(level) {
    let newLevel;

    fetch(`json/levels/${level}.json`)
        .then((res) => res.json())
        .then((data) => newLevel = data)

    if (newLevel === currentLevel) {
        fetch(`json/levels/${level}.json`)
            .then((res) => res.json())
            .then((data) => currentLevel = data)
            .then(levelSequencer);
    console.log(currentLevel, newLevel);

    }

}

function levelSequencer() {
    for (let i = 0; i < currentLevel.length; i++) {
         // Delay Wave
        if (levelTime > currentLevel[i][0]) {
            // Load Wave
            enemyFormation(i);
        }
    }
    console.log("once");
}

function levelTimer(state) {
    if (state === true) {
        levelTime += deltaTime / 1000;
    }
}