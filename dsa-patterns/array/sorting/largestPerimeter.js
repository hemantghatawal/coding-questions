// https://leetcode.com/problems/largest-perimeter-triangle/description/
/**
 * @param {number[]} nums
 * @return {number}
 */
var largestPerimeter = function (nums) {
  nums.sort((a, b) => a - b);

  for (let i = nums.length - 3; i >= 0; i--) {
    let a = nums[i];
    let b = nums[i + 1];
    let c = nums[i + 2];

    if (a + b > c) {
      return a + b + c;
    }
  }
  return 0
};

console.log(largestPerimeter([1,2,1,10]));
