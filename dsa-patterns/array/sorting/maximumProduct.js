// https://leetcode.com/problems/maximum-product-of-three-numbers/
/**
 * @param {number[]} nums
 * @return {number}
 */
var maximumProduct = function (nums) {
  nums.sort((a, b) => a - b);

  let maxProduct = -Infinity;

  // fix the pointers
  let fixed = 0;
  let left = fixed + 1;
  let right = nums.length - 1;

  while (fixed < nums.length - 2) {
    left = fixed + 1;
    right = nums.length - 1;
    while (left < right) {
        let product = nums[fixed] * nums[right] * nums[left] 
        if(product > maxProduct) {
            maxProduct = product
        }
        left++;
        right--;
    }
    fixed++;
  }

  return maxProduct;
};

console.log(maximumProduct([-1,-2,-3]));
