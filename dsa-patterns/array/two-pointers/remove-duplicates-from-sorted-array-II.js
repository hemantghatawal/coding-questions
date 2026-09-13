// https://leetcode.com/problems/remove-duplicates-from-sorted-array-ii/

/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
    let write = 3;
    for(let read = 2; read < nums.length; read++){
      if(nums[read] !== nums[write - 3]){
        nums[write] = nums[read];
        write++
      }
    }

    console.log(nums)
    return write
};


console.log(removeDuplicates([0, 0, 0, 0, 1, 1, 1, 1, 2, 3, 3]));
