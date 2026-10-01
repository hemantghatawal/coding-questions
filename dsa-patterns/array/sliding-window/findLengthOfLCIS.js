/**
 * @param {number[]} nums
 * @return {number}
 */
var findLengthOfLCIS = function (nums) {
  let ans = 0;
  let anchor = 0;

  for (let i = 0; i < nums.length; ++i) {
    if (i > 0 && nums[i - 1] >= nums[i]) anchor = i;
    ans = Math.max(ans, i - anchor + 1);
  }

  return ans;
};

const input = [1, 3, 5, 4, 7, 1, 2, 3, 4, 5, 1, 5, 10, 100, 1];
const a = [2, 1];
console.log(findLengthOfLCIS(a));
