// https://leetcode.com/problems/array-partition/description/
/**
 * @param {number[]} nums
 * @return {number}
 */
var arrayPairSum = function (nums) {
  nums.sort((a, b) => a - b);

  let maxSum = 0;
  for (let i = 0; i < nums.length; i += 2) {
    maxSum += Math.min(nums[i], nums[i + 1]);
    console.log("i =>", nums[i]);
    console.log(Math.min(nums[i], nums[i + 1]));
  }
  return maxSum;
};

console.log(arrayPairSum([1, 4, 3, 2]));
