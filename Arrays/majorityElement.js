/**
 * @param {number[]} nums
 * @return {number}
 */

// Given an array nums of size n, return the majority element.

// The majority element is the element that appears more than ⌊n / 2⌋ times.
// You may assume that the majority element always exists in the array.

// Example 1:

// Input: nums = [3,2,3]
// Output: 3
// Example 2:

// Input: nums = [2,2,1,1,1,2,2]
// Output: 2

var majorityElement = function (nums) {
  // we know we want to make a freqs counter
  const frequencies = freqs(nums);

  for (let key in frequencies) {
    if (frequencies[key] > nums.length / 2) {
      return key;
    }
  }
};

var freqs = function (arr) {
  const freqsObj = {};
  for (let num of arr) {
    if (freqsObj[num]) {
      freqsObj[num]++;
    } else {
      freqsObj[num] = 1;
    }
  }
  return freqsObj;
};

console.log(majorityElement([2, 2, 1, 1, 1, 2, 2]));
