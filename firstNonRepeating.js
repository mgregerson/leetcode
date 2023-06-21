// Write a function named first_non_repeating_letter that takes a string input,
//   and returns the first character that is not repeated anywhere in the string.

// For example, if given the input 'stress', the function should return 't', since
// the letter t only occurs once in the string, and occurs first in the string.

// As an added challenge, upper - and lowercase letters are considered the same character,
//   but the function should return the correct case for the initial letter.For example, the input 'sTreSS' should return 'T'.

// If a string contains all repeating characters, it should return an empty string ("") or None -- see sample tests.

function firstNonRepeatingLetter(string) {
  let charCount = {};

  for (let i = 0; i < string.length; i++) {
    const char = string[i].toLowerCase(); // Convert to lowercase for case-insensitive comparison
    charCount[char] = (charCount[char] || 0) + 1;
  }

  // Count the frequency of each character
  for (let n = 0; n < string.length; n++) {
    const char = string[n];
    if (charCount[char.toLowerCase()] === 1) {
      return char;
    }
  }
  return "";
}

console.log(firstNonRepeatingLetter("moonmen"));
