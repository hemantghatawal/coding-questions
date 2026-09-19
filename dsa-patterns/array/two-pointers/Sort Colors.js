// https://leetcode.com/problems/sort-colors/
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function (nums) {
  let left = 0;
  let right = 0;

  let findNum = 0;
  while (left < nums.length) {
    console.log(nums[left], nums[right], findNum)
    if (nums[right] === findNum) {
      let temp = nums[right];
      nums[right] = nums[left];
      nums[left] = temp;
      left++;
      right++ // just need to shift the right also when I thought
    } else {
      right++;
    }

    if (right > nums.length) {
      right = left;
      findNum++;
    }

    if (findNum === 2 && right > nums.length) {
      break;
    }
  }
  return nums;
};

console.log(sortColors([0, 1]));
