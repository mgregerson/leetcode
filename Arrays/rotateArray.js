// Example 1:

// Input: nums = [1,2,3,4,5,6,7], k = 3
// Output: [5,6,7,1,2,3,4]
// Explanation:
// rotate 1 steps to the right: [7,1,2,3,4,5,6]
// rotate 2 steps to the right: [6,7,1,2,3,4,5]
// rotate 3 steps to the right: [5,6,7,1,2,3,4]
// Example 2:

// Input: nums = [-1,-100,3,99], k = 2
// Output: [3,99,-1,-100]
// Explanation:
// rotate 1 steps to the right: [99,-1,-100,3]
// rotate 2 steps to the right: [3,99,-1,-100]

function rotateArray(nums, steps) {
  // we know we need to decrement steps
  // for each step, we pop off the back, and add that to the front of the array
  let stepCount = steps;
  while (stepCount > 0) {
    let last = nums.pop();
    nums.unshift(last);
    stepCount--;
  }
  return nums;
}

console.log(rotateArray([1, 2, 3, 4, 5, 6, 7], 3));
