function startLevel(level) {
    fetch(`json/levels/${level}.json`)
        .then((res) => res.json())
        .then((data) => currentLevel = data)
        .then(levelSequencer);
}

function levelSequencer() {
    for (let i = 0; i < currentLevel.length; i++) {
        for (let j = 0; j < currentLevel[i].length; j++) {
            // Delay Wave

            // Load Wave
            for (let k = 1; k < currentLevel[i][j].length; k++) {

            }
        }
    }
}

function levelTimer(state) {
    if (state === true) {
        levelTime += deltaTime;
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