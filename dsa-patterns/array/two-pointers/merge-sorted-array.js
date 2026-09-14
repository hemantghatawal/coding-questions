// https://leetcode.com/problems/merge-sorted-array/
/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function(nums1, m, nums2, n) {
    let left = m - 1;
    let right = n - 1;
    let write = m + n - 1;

    while(right >= 0){
      if (left >= 0 && nums1[left] > nums2[right]) {
            nums1[write] = nums1[left];
            left--;
        } else {
            nums1[write] = nums2[right];
            right--;
        }

        write--;
    }

    return nums1
};

console.log(merge([1,2,3,0,0,0], 3, [2,3,6], 3))