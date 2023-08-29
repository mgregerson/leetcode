/**
 * @param {string} s
 * @param {number[]} indices
 * @return {string}
 *
 * Input: s = "codeleet", indices = [4,5,6,7,0,2,1,3]
 * Output: "leetcode"
 * Explanation: As shown, "codeleet" becomes "leetcode" after shuffling.
 */
var restoreString = function (s, indices) {
  // We know that we want to re-order the string based on the indices
  // each time we get to a letter, check to see if the current index is equal to
  let target = 0;
  let curr = 0;
  let result = "";

  while (target < indices.length) {
    if (indices[curr] === target) {
      result += s[curr];
      target += 1;
      curr = 0;
    } else {
      curr += 1;
    }
  }

  return result;
};
