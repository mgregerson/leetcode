// Write a function to find the longest common prefix string amongst an array of strings.

// If there is no common prefix, return an empty string "".

// Example 1:

// Input: strs = ["dog","racecar","car"]
// Output: ""
// Explanation: There is no common prefix among the input strings.

// ["flower", "flow", "flight"]

// matchingLetters -> 'f' -> 'fl'
// commonLetters = ['flow', 'fl']
// currWordIndex = 3

// Return 'fl'

function longestCommonPrefix(strings) {
  // Edge case - no words
  if (strings.length === 0) return "";
  // Create our variables
  const commonLetters = [];
  let matchingLetters = "";
  let currWordIndex = 1;

  // While loop that will run until currWordIndex = strings.length
  while (currWordIndex < strings.length) {
    // run a for loop across the currWord
    for (let i = 0; i < strings[currWordIndex].length - 1; i++) {
      // If letter matches first word letter at index, add to matchingLetters
      if (strings[currWordIndex][i] === strings[0][i]) {
        if (i === strings[currWordIndex].length - 1) {
          matchingLetters += strings[currWordIndex][i];
          commonLetters.push(matchingLetters);
          matchingLetters = "";
          currWordIndex++;
          // Continue should not be required as while loop will restart naturally with next word at currWordIndex
        } else {
          matchingLetters += strings[currWordIndex][i];
        }
      } else {
        // if letter does not match first word at index
        // increment currWordIndex, push commonLetters, reset matchingLetters, continue while loop
        commonLetters.push(matchingLetters);
        currWordIndex++;
        matchingLetters = "";
        continue;
      }
    }
    continue;
  }
  return commonLetters.sort()[0];
}

console.log(longestCommonPrefix(["flower", "flow", "flight"]));
