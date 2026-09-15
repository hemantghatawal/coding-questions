/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {
  // sort
  nums = nums.sort((a, b) => a - b);
  console.log(nums);

  let result = [];

  // fix the pointers
  let fixed = 0;
  let left = fixed + 1;
  let right = nums.length - 1;

  while (fixed < nums.length - 2) {
    if (fixed > 0 && nums[fixed] === nums[fixed - 1]) {
      fixed++;
      continue;
    }

    left = fixed + 1;
    right = nums.length - 1;

    while (left < right) {
      let sum = nums[fixed] + nums[left] + nums[right];
      if (sum > 0) {
        right--;
      } else if (sum < 0) {
        left++;
      } else {
        // sum === 0
        result.push([nums[fixed], nums[left], nums[right]]);
        left++;
        right--;

        // left ke duplicates skip karo
        while (left < right && nums[left] === nums[left - 1]) {
          left++;
        }

        // right ke duplicates skip karo
        while (left < right && nums[right] === nums[right + 1]) {
          right--;
        }
      }
    }

    fixed++;
  }

  return result;
};

console.log(threeSum([-1, 0, 1, 2, -1, -4]));
