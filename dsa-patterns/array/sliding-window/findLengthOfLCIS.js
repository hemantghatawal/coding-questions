/**
 * @param {number[]} nums
 * @return {number}
 */
var findLengthOfLCIS = function (nums) {
  if (nums.length <= 1) return 1;

  let LCIS = 1;
  let left = 0;

  for (let right = 1; right < nums.length; right++) {
    left = right - 1;
    right = left + 1;
    console.log("left ", left);
    if (nums[left] === nums[right]) LCIS = 1;
    while (nums[right - 1] < nums[right]) {
      console.log(nums[right - 1], nums[right]);
      LCIS = Math.max(LCIS, right - left + 1);
      right++;
    }
  }

  return LCIS;
};

const input = [1, 3, 5, 4, 7, 1, 2, 3, 4, 5, 1, 5, 10, 100, 1];
const a = [2, 1];
console.log(findLengthOfLCIS(a));
