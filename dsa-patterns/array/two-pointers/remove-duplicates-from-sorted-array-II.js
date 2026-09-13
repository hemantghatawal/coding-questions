// https://leetcode.com/problems/remove-duplicates-from-sorted-array-ii/

/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
  let write = 2;
  for (let read = 2; read < nums.length; read++) {
    console.log("read ", read)
    console.log("write ", write)
    console.log("write - 2 ", write - 2)
    console.log("nums ", nums)
    if (nums[read] !== nums[write - 2]) {
      nums[write] = nums[read];
      write++;
    }
  }
  console.log(nums)
  return write;
};
                           // w.          r
console.log(removeDuplicates([0, 0, 0, 0, 1, 1, 1, 1, 2, 3, 3]));
