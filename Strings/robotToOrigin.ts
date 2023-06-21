var judgeCircle = function (moves: string): boolean {
  let verticalCurr = 0;
  let horizontalCurr = 0;

  for (let i = 0; i < moves.length; i++) {
    if (moves[i] === "U") {
      verticalCurr++;
    } else if (moves[i] === "D") {
      verticalCurr--;
    } else if (moves[i] === "L") {
      horizontalCurr--;
    } else if (moves[i] === "R") {
      horizontalCurr++;
    }
  }

  if (verticalCurr === 0 && horizontalCurr === 0) {
    return true;
  }
  return false;
};

console.log(judgeCircle("UD"));
