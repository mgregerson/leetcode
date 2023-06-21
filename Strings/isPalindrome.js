// A phrase is a palindrome if, after converting all uppercase letters into lowercase letters
// and removing all non - alphanumeric characters, it reads the same forward and backward.Alphanumeric
// characters include letters and numbers.

// Given a string s, return true if it is a palindrome, or false otherwise.

// Example 1:

// Input: s = "A man, a plan, a canal: Panama"
// Output: true
// Explanation: "amanaplanacanalpanama" is a palindrome.
// Example 2:

// Input: s = "race a car"
// Output: false
// Explanation: "raceacar" is not a palindrome.

var isPalindrome = function (s) {
  let trimmedString = s
    .replace(/[^a-z0-9]/gi, "")
    .trim()
    .toLowerCase()
    .split("");
  console.log(trimmedString);

  if (trimmedString.length <= 1) {
    return true;
  }

  let first = 0;
  let last = trimmedString.length - 1;

  while (first < last) {
    currLeft = trimmedString.shift();
    currRight = trimmedString.pop();

    console.log("currLeft=", currLeft, "last", currRight);
    if (currLeft !== currRight) {
      return false;
    }
    first++;
    last--;
  }
  return true;
};

console.log(isPalindrome("0P"));
