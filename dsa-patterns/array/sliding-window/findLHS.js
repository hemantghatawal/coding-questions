//
/**
 * @param {number[]} nums
 * @return {number}
 */
var findLHS = function (nums) {
  let map = {};
  for (let i = 0; i < nums.length; i++) {
    map[nums[i]] = (map[nums[i]] || 0) + 1;
  }

  let max = 0;
  for (const num in map) {
      const n = Number(num);
    if (map[n + 1]) {
      max = Math.max(max, map[n] + map[n + 1]);
    }
  }

  return max;
};

console.log(findLHS([1, 3, 2, 2, 5, 2, 3, 7]));
