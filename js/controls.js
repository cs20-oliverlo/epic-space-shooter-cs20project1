function controls() {
    if (state === "start") {
        if (keys.w === true || keys.a === true || keys.d === true || keys.s === true || keys.j === true || keys.p === true  || keys.space === true || keys.shiftLeft === true || mouseIsPressed === true) {
            state = "gameon";            
        }
    } else if (state === "gameon") {
        // Game Controls
        player[0].up = keys.w;
        player[0].left = keys.a;
        player[0].right = keys.d;
        player[0].down = keys.s;
        player[0].slow = keys.shiftLeft;
        if (keys.j === true || mouseIsPressed === true) {
            player[0].shoot = true;
        } else {
            player[0].shoot = false;
        }

        // Pause
        if (keys.p === true) {
            state = "pause";
            keys.p = false;
            pauseScreen.selector.x = pauseScreen.resumeBtn.x
            pauseScreen.selector.y = pauseScreen.resumeBtn.y
        }
    } else if (state === "pause") {
        // Quick Unpause
        if (keys.p === true) {
            state = "gameon";
            keys.p = false;
        }

        // Move Selector Up/Down
        if (pauseScreen.selector.y === pauseScreen.resumeBtn.y && keys.s === true) {
            pauseScreen.selector.x = pauseScreen.restartBtn.x;
            pauseScreen.selector.y = pauseScreen.restartBtn.y;
        } 
        if (pauseScreen.selector.y === pauseScreen.restartBtn.y && keys.w === true) {
            pauseScreen.selector.x = pauseScreen.resumeBtn.x;
            pauseScreen.selector.y = pauseScreen.resumeBtn.y;
        }

        // Resume Button
        if (pauseScreen.selector.y === pauseScreen.resumeBtn.y && keys.space === true || mouseIsPressed === true || keys.j === true) {
            state = "gameon";
        }
        // Restart Button
        if (pauseScreen.selector.y === pauseScreen.restartBtn.y && keys.space === true || mouseIsPressed === true || keys.j === true) {
            reset();
        }
    }
}