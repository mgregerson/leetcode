// Input: operations = ["++X","++X","X++"]
// Output: 3
// Explanation: The operations are performed as follows:
// Initially, X = 0.
// ++X: X is incremented by 1, X = 0 + 1 = 1.
// ++X: X is incremented by 1, X = 1 + 1 = 2.
// X++: X is incremented by 1, X = 2 + 1 = 3.

var finalValueAfterOperations = function (operations: string[]): number {
  let curr: number = 0;
  const values: object = {
    "++X": 1,
    "X++": 1,
    "--X": -1,
    "X--": -1,
  };

  for (let i = 0; i < operations.length; i++) {
    curr += values[operations[i]];
  }
  return curr;
};

console.log(finalValueAfterOperations(["++X", "++X", "X++"]));
