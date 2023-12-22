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
    }
}

function levelSequencer() {
    for (let i = 0; i < currentLevel.length; i++) {
        for (let j = 1; j < currentLevel[i].length; j++) {
            // Delay Wave
            if (levelTime > currentLevel[i][0]) {
                // Load Wave
                enemyFormation(i, j);
                console.log("ok");
            }
        }
    }
}

function levelTimer(state) {
    if (state === true) {
        levelTime += deltaTime / 1000;
    }
}

// [[
//     0,
//     [0, "discus", 0],
//     [0, 0, 0],
//     [0, 0, 0]
// ], [
//     1,
//     [0, "discus", 0],
//     [0, 0, 0],
//     [0, 0, 0]
// ]]