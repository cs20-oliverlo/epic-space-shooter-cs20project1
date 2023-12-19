function levelSequencer(level) {

    fetch(`json/levels/${level}.json`)
        .then((res) => res.json())
        .then((data) => currentLevel = data);
    
    console.log(currentLevel);

    for (let i = 0; i < currentLevel.length; i++) {
        for (let j = 0; j < currentLevel[i].length; i++) {
            
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