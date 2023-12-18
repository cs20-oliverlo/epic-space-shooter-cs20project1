function levelSequencer(level) {
    let currentLevel;

    fetch(`json/${level}.json`)
    .then((res) => res.json())
    .then((data) => currentLevel = data);

    for (let i = 0; i < currentLevel.length; i++) {
        for (let j = 0; j < currentLevel[i][j].length; i++) {
            
        }
    }
}

// [[
//     [0, "discus", 0],
//     [0, 0, 0],
//     [0, 0, 0],
//     30
// ], [
//     [0, "discus", 0],
//     [0, 0, 0],
//     [0, 0, 0]
// ]]