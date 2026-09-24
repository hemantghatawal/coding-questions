// https://leetcode.com/problems/largest-number/
/**
 * @param {number[]} nums
 * @return {string}
 */
var largestNumber = function (nums) {
  nums.sort((a, b) => {
    let num1 = String(a) + String(b);
    let num2 = String(b) + String(a);

    return num2.localeCompare(num1);
  });

  if (nums[0] === 0) {
    return "0";
  }
  
  return nums.join("");
};

console.log(largestNumber([0, 0]));
// Output: "9534330"
