// https://leetcode.com/problems/shortest-unsorted-continuous-subarray/
/**
 * @param {number[]} nums
 * @return {number}
 */
var findUnsortedSubarray = function (nums) {
  let left = -1;
  let right = -1;

  let max = -Infinity;

  // Find right boundary
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] < max) {
      right = i;
    } else {
      max = nums[i];
    }
  }

  let min = Infinity;

  // Find left boundary
  for (let i = nums.length - 1; i >= 0; i--) {
    if (nums[i] > min) {
      left = i;
    } else {
      min = nums[i];
    }
  }

  if (left === -1) return 0;

  return right - left + 1;
};

console.log(findUnsortedSubarray([1, 3, 2, 2, 2]));

// 1️⃣ Find where disorder starts
//           ↓
// 2️⃣ Find where disorder ends
//           ↓
// 3️⃣ Find MIN and MAX of that region
//           ↓
// 4️⃣ MIN se decide karo LEFT kitna expand hoga
//           ↓
// 5️⃣ MAX se decide karo RIGHT kitna expand hoga
//           ↓
// 6️⃣ answer = right - left + 1

// [2,6,4,8,10,9,15] // Expected : 5
// [1,2,3,3,3] // Expected : 0
// [1,3,2,2,2]. // Expected : 4
