// 8 x 8 board
// Queen can move hor/vert/diag

// two pieces on the board - King and Queen
// We want to find out if the Queen can capture the King

// 4 arguments: Queen[x], Queen[y], King[x], King[y]

// | [0, 0] | 1 | 2 | 3 | 4 | 5 | 6 | 7 |
// | [0, 1] | 1 | 2 | 3 | 4 | 5 | 6 | 7 |
// | [0, 2] | 1 | 2 | 3 | 4 | 5 | 6 | 7 |
// | [0, 3] | 1 | 2 | 3 | 4 | 5 | 6 | 7 |
// | [0, 4] | 1 | 2 | 3 | 4 | 5 | 6 | 7 |
// | [0, 5] | 1 | 2 | 3 | 4 | 5 | 6 | 7 |
// | [0, 6] | 1 | 2 | 3 | 4 | 5 | 6 | 7 |
// | [0, 7] | 1 | 2 | 3 | 4 | 5 | 6 | 7 |

// King -> [7, 0] (Horizontal)
// Queen ->[1, 6] -> True

// King -> [6, 6] (Horizontal)
// Queen -> [1, 1] -> True

// King -> [7, 5] (Horizontal)
// Queen -> [4, 2] -> True

// King -> [3, 2] (Horizontal);
// Queen -> [5, 3] -> False

// If king's y OR x coordinate matches Queen's y or x coordinate,
// we can return true;

// In order to travel horizontally, we will do one of 4 things:
// xAxis -1 and yAxis -1
// xAxis +1 and yAxis -1
// xAxis -1 and yAxis +1
// xAxis +1 and yAxis +1

function checkMate(queenXAxis, queenYAxis, kingXAxis, kingYAxis) {
  // if xAxis matches xAxis OR yAxis matches yAxis, return true

  const kingCoord = [kingXAxis, kingYAxis];
  let currQueenXAxis = queenXAxis;
  let currQueenYAxis = queenYAxis;

  if (queenXAxis === kingXAxis || queenYAxis === kingYAxis) {
    return true;
  }
  // Create a while loop that will break
  // when xAxis of Queen is < 0 or > 7 ||

  // yAxis of Queen is < 0 OR > 7
  // Loop one(xAxis-1 and yAxis -1)
  // We will start at queenXAxis and end at 0;
  // yAxis will start at queenYAxis and end at 0
  // decrement yAxis by one each time; if [xAxis, yAxis] === kings, return true
  // if not, this direction does not work!

  // go up and left
  while (currQueenXAxis >= 0 && currQueenYAxis >= 0) {
    currQueenXAxis--;
    currQueenYAxis--;
    if ([currQueenXAxis, currQueenYAxis] === kingCoord) {
      return true;
    }
  }

  currQueenXAxis = queenXAxis;
  currQueenYAxis = queenYAxis;

  // go up and right
  while (currQueenXAxis <= 7 && currQueenYAxis >= 0) {
    currQueenXAxis++;
    currQueenYAxis--;
    if ([currQueenXAxis, currQueenYAxis] === kingCoord) {
      return true;
    }
  }

  currQueenXAxis = queenXAxis;
  currQueenYAxis = queenYAxis;

  // go down and left
  while (currQueenXAxis >= 0 && currQueenYAxis <= 7) {
    currQueenXAxis--;
    currQueenYAxis++;
    if ([currQueenXAxis, currQueenYAxis] === kingCoord) {
      return true;
    }
  }

  currQueenXAxis = queenXAxis;
  currQueenYAxis = queenYAxis;

  // go down and right
  while (currQueenXAxis <= 7 && currQueenYAxis <= 7) {
    currQueenXAxis++;
    currQueenYAxis++;
    if ([currQueenXAxis, currQueenYAxis] === kingCoord) {
      return true;
    }
  }

  return false;
}
