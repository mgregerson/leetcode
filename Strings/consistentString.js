// Input: allowed = "ab", words = ["ad","bd","aaab","baa","badab"]
// Output: 2
// Explanation: Strings "aaab" and "baa" are consistent
// since they only contain characters 'a' and 'b'.
// Example 2:

// Input: allowed = "abc", words = ["a","b","c","ab","ac","bc","abc"]
// Output: 7
// Explanation: All strings are consistent.
// Example 3:

// Input: allowed = "cad", words = ["cc","acd","b","ba","bac","bad","ac","d"]
// Output: 4
// Explanation: Strings "cc", "acd", "ac", and "d" are consistent.

/**
 * @param {string} allowed
 * @param {string[]} words
 * @return {number}
 */
var countConsistentStrings = function (allowed, words) {
  let allowedSet = new Set();
  let count = 0;
  for (let letter of allowed) {
    allowedSet.add(letter);
  }

  for (let word of words) {
    let isConsistent = true;
    for (let letter of word) {
      if (!allowedSet.has(letter)) {
        isConsistent = false;
        break;
      }
    }
    if (isConsistent) {
      count++;
    }
  }

  return count;
};
