function controls() {
    if (state === "start") {
        if (keys.w === true || keys.a === true || keys.d === true || keys.s === true || keys.space === true || keys.shiftLeft === true || mouseIsPressed === true) {
            state = "gameon";            
        }
    } else if (state === "gameon") {
        player[0].up = keys.w;
        player[0].left = keys.a;
        player[0].right = keys.d;
        player[0].down = keys.s;
        player[0].shoot = mouseIsPressed;
    }
}