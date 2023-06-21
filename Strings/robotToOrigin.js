var judgeCircle = function (moves) {
    var verticalCurr = 0;
    var horizontalCurr = 0;
    for (var i = 0; i < moves.length; i++) {
        if (moves[i] === "U") {
            verticalCurr++;
        }
        else if (moves[i] === "D") {
            verticalCurr--;
        }
        else if (moves[i] === "L") {
            horizontalCurr--;
        }
        else if (moves[i] === "R") {
            horizontalCurr++;
        }
    }
    if (verticalCurr === 0 && horizontalCurr === 0) {
        return true;
    }
    return false;
};
