// https://leetcode.com/problems/contains-duplicate-ii/?envType=problem-list-v2&envId=sliding-window
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var containsNearbyDuplicate = function (nums, k) {
  const map = {};

  for (let i = 0; i < nums.length; i++) {
    if (map[nums[i]] !== undefined) {
      if (map[nums[i]] < i - k) {
        delete map[nums[i]];
        map[nums[i]] = i
      } else {
        return true;
      }
    } else {
      map[nums[i]] = i;
    }
  }

  return false;
};

console.log(containsNearbyDuplicate([1, 2, 3, 4, 1], 2));
