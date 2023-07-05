function palindromePermutation(s) {
  // We know that we can remove all unnecessary space.
  // We know that there needs to be the same amount of each letter, or only 1 of one letter
  let splitString = s.replaceAll(" ", "").split("");
  // Count the frequency of each letter.
  let letterCounts = new Map();
  console.log(splitString);
  for (let n = 0; n < splitString.length; n++) {
    if (letterCounts.has(splitString[n])) {
      let currCount = letterCounts.get(splitString[n]);
      letterCounts.set(splitString[n], currCount + 1);
    }
  }
}

console.log(palindromePermutation("tactcoa"));
