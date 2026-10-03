// https://leetcode.com/problems/subarray-product-less-than-k/
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var numSubarrayProductLessThanK = function (nums, k) {
  if (k <= 1) return 0;

  let left = 0;
  let product = 1;
  let count = 0;

  for (let right = 0; right < nums.length; right++) {
    // Add current element to window
    product *= nums[right];

    // Shrink window until product < k
    while (product >= k) {
      product /= nums[left];
      left++;
    }

    // Number of valid subarrays ending at right
    count += right - left + 1;
  }

  return count;
};

const nums = [1, 2, 3];
const k = 3;
// ans  8
console.log("ans => ", numSubarrayProductLessThanK(nums, k));
