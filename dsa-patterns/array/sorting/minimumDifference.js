// https://leetcode.com/problems/minimum-difference-between-highest-and-lowest-of-k-scores/
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var minimumDifference = function (nums, k) {
  nums.sort((a, b) => a - b);
  console.log("sorted", nums);

  let minSum = Infinity;
  for (let i = 0; i <= nums.length - k; i++) {
    let diff = nums[i + k - 1] - nums[i];

    minSum = Math.min(minSum, diff);
  }

  return minSum;
};

console.log(
  "yo",
  minimumDifference([87063, 61094, 44530, 21297, 95857, 93551, 9918], 6),
);
