// https://leetcode.com/problems/sort-colors/
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function (nums) {
    // Brute Force
  const map = {
    // "o": 0,
    // "1": 0,
    // "2": 0,
  };
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] in map) {
      map[nums[i]] = map[nums[i]] + 1;
    } else {
      map[nums[i]] = 1;
    }
  }
  console.log(map);

  const result = new Array(nums.length);
  for (let i = 0; i < result.length; i++) {
    if (i < map["0"]) {
      result[i] = 0;
    } else if (i < map["0"] + map["1"]) {
      result[i] = 1;
    } else if (i < map["0"] + map["1"] + map["2"]) {
      result[i] = 2;
    }
  }

  return result;
};

console.log(sortColors([2, 0, 2, 1, 1, 0]));
