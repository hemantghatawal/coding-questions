/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumClosest = function (nums, target) {
  if (nums.length === 3) {
    return nums[0] + nums[1] + nums[2];
  }

  nums.sort((a, b) => a - b);

  let fixed = 0;
  let closest = nums[0] + nums[1] + nums[2];

  while (fixed < nums.length - 2) {
    let left = fixed + 1;
    let right = nums.length - 1;

    while (left < right) {
      let sum = nums[fixed] + nums[left] + nums[right];

      if(Math.abs(sum - target) < Math.abs(closest - target)){
        closest = sum
      }

      if(sum > target){
        right--
      } else if (sum < target) {
        left++
      } else {
        // sum === target
        return sum
      }
    }

    fixed++;
  }

  return closest;
};

console.log(threeSumClosest([-1000,-5,-5,-5,-5,-5,-5,-1,-1,-1], -14));
