// Implement a method to perform basic string compression using the counts of repeated characters.

// If the compressed string is not smaller than the original string, return original string.
// has only uppercase and lowercase letters.

// Ex: abc
// Output -> a2b1c5a3

// aabbccAAdd
// Output -> a2b2c2A2d2

/**
 *
 * AAdd
 * currLetter = c
 * letterCount = 2
 * comparedLetter = A
 * compressedString = 'a2b2c2A2
 *
 */

function stringCompression(string) {
  // set up a counter at 1
  let letterCount = 1;
  // Turn string into an array
  let splitString = string.split("");
  // create string result var
  let compressedString = "";
  // letter variable
  let currLetter = splitString.shift();
  // ie -> letter = array.shift();
  // while array has a length, check array.shift() vs letter
  while (splitString.length > 0) {
    let comparedLetter = splitString.shift();
    // if array.shift is equal to letter, increase counter.
    if (comparedLetter === currLetter) {
      letterCount++;
    } else {
      // if array.shift() is not equal to letter, concatenate the letter and the counter variable onto our result
      compressedString += currLetter;
      compressedString += letterCount;
      // reset counter at 1, set letter to our comparedLetter
      letterCount = 1;
      currLetter = comparedLetter;
    }
  }

  if (compressedString.length >= string.length) {
    return string;
  }
  return compressedString;
}

console.log(stringCompression("abc"));
