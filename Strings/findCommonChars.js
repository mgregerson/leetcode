// Given a string array of words, return an array of all characters that show up in all strings within the words, including duplicates.

// You may return this answer in any order.

// IE: words = ['bella', 'label', 'roller']

// Output: ['e', 'l', 'l']

// {
//   'l': 2,
//   'a': 1,
//   'b': 1',
//   'e': 1
// }

// {
//   'r': 2,
//   'o': 1,
//   'l': 2,
//   'e': 1
// }

// {
//   'b': 1,
//   'e': 1,
//   'l': 2,
//   'a': 1
// }

// letter = e

function findCommonChars(words) {
  // Create a dictionary for the letters of each word. Get charCount of each word.
  const charCounts = [];

  for (let word of words) {
    charCounts.push(charCount(word));
  }

  // Create an array of the letters that are in all words.
  const commonChars = [];

  // Iterate through the first word's dictionary.

  for (let letter in charCounts[0]) {
    let isCommon = true;
    let numOfLetter = charCounts[0][letter];

    for (let i = 1; i < charCounts.length; i++) {
      // Check if this letter is in charCounts at i. If it is, reduce that value by 1

      if (!charCounts[i][letter] || charCounts[i][letter] === 0) {
        isCommon = false;
        // Check how many of the letter there are
      } else {
        if (charCounts[i][letter] < numOfLetter) {
          numOfLetter = charCounts[i][letter];
        }
      }
    }
    if (isCommon === true) {
      while (numOfLetter > 0) {
        commonChars.push(letter);
        numOfLetter -= 1;
      }
    }
  }
  return commonChars;
}

function charCount(word) {
  const result = {};

  for (let letter of word) {
    if (result[letter]) {
      result[letter] += 1;
    } else {
      result[letter] = 1;
    }
  }
  return result;
}

console.log(findCommonChars(["bella", "label", "roller"]));
