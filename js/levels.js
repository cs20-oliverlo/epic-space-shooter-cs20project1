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
        for (let j = 0; j < currentLevel[i].length; j++) {
            // Delay Wave
            if (levelTime > currentLevel[i][0]) {
                // Load Wave
                for (let k = 1; k < currentLevel[i][j].length; k++) {
                    enemyFormation(k);
                    console.log("ok");
                }
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
//     5,
//     [0, "discus", 0],
//     [0, 0, 0],
//     [0, 0, 0]
// ], [
//     2,
//     [0, "discus", 0],
//     [0, 0, 0],
//     [0, 0, 0]
// ]]