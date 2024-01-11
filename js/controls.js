function controls() {
    if (state === "start") {
        if (keys.w === true || keys.a === true || keys.d === true || keys.s === true || keys.j === true || keys.p === true  || keys.space === true || keys.escape === true || keys.shiftLeft === true || mouseIsPressed === true) {
            state = "gameon";            
        }
    } else if (state === "gameon") {
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

        if (keys.p === true || keys.escape === true) {
            state = "pause";
        }
    }
}