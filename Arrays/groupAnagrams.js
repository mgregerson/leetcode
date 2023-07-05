// Given an array of strings strs, group the anagrams
// together.You can return the answer in any order.

// An Anagram is a word or phrase formed by rearranging
// the letters of a different word or phrase, typically
// using all the original letters exactly once.

// Example 1:

// Input: strs = ["eat","tea","tan","ate","nat","bat"]
// Output: [["bat"],["nat","tan"],["ate","eat","tea"]]
// Example 2:

// Input: strs = [""]
// Output: [[""]]
// Example 3:

// Input: strs = ["a"]
// Output: [["a"]]

function groupAnagram(strs) {
  // we know that we need to group anagrams together
  // we know that we need to check and hash the letters of each word.
  // let's try and use a sorting method. the sorted array will include the first word,
  // and any others that match it.
  let sorted = new Map();
  // now we need to iterate over each word
  for (let str of strs) {
    let sortedStr = str.split("").sort().join("");
    if (sorted.has(sortedStr)) {
      sorted.get(sortedStr).push(str);
    } else {
      sorted.set(sortedStr, [str]);
    }
  }
  return Array.from(sorted.values());
}
