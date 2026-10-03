// https://leetcode.com/problems/subarray-product-less-than-k/
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var numSubarrayProductLessThanK = function (nums, k) {
  if (k <= 1) return 0;

  let mulCount = 0;

  for (let windowSize = nums.length; windowSize > 0; windowSize--) {
    for (let left = 0; left + windowSize <= nums.length; left++) {
      let multiply = 1;

      for (let i = left; i < left + windowSize; i++) {
        multiply *= nums[i];
      }

      if (multiply < k) {
        mulCount++;
      }
    }
  }

  return mulCount;
};

const nums = [1,2,3];
const k = 3;
// ans  8
console.log("ans => ", numSubarrayProductLessThanK(nums, k));
