/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */

// Example 1:

// Input: nums = [1,1,1,2,2,3], k = 2
// Output: [1,2]

// Example 2:
// Input: nums = [1], k = 1
// Output: [1]

var topKFrequent = function (nums, k) {
  let numsCount = new Map();
  for (let num of nums) {
    if (numsCount.has(num)) {
      let newCount = numsCount.get(num) + 1;
      numsCount.set(num, newCount);
    } else {
      numsCount.set(num, 1);
    }
  }
  let output = [];
  while (k > 0) {
    let max = Math.max(...numsCount.values());
    let num = numsCount.get(max);
    for (let [key, value] of numsCount) {
      if (value === max) {
        output.push(key);
        numsCount.delete(key);
        k--;
      }
    }
  }
  return output;
};
