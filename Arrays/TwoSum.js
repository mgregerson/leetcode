// Given an array of integers nums and an integer target, 
// return indices of the two numbers such that they add up to target.

// You may assume that each input would have exactly one
// solution, and you may not use the same element twice.

// You can return the answer in any order.


/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

function twoSum(nums, target) {
  for (let n = 0; n < nums.length; n++){
    for (let j = n + 1; j < nums.length; j++){
      if (nums[n] + nums[j] === target) {
        return [n, j];
      }
    }
  }
}

console.log(twoSum([3, 2, 3], 6))