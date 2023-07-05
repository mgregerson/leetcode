/** You are given an integer array nums. You are initially
 *  positioned at the array's first index, and each element in the array
 *  represents your maximum jump length at that position.
 *
 *  Return true if you can reach the last index, or false otherwise.
 */

/**
 * Example 1:
 * Input: nums = [2,3,1,1,4]
 * Output: true
 * Explanation: Jump 1 step from index 0 to 1, then 3 steps to the last index.
 *
 */

function jumpGame(nums) {
  // We know that nums is the amount of steps we will take
  // we know we need to keep track of our current position
  // if our current position is equal to the length of the numsay - 1, return true.
  if (nums.length <= 1) {
    return true;
  }

  let maxReach = 0;
  // We will need a goal index
  const goal = nums.length - 1;
  for (let n = 0; n < nums.length; n++) {
    maxReach = Math.max(maxReach, n + nums[n]);
    if (maxReach >= goal) {
      return true;
    }
  }
  return false;
}
