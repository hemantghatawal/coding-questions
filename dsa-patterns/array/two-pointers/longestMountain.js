// https://leetcode.com/problems/longest-mountain-in-array/
/**
 * @param {number[]} arr
 * @return {number}
 */
var longestMountain = function (arr) {
    let n = arr.length;
    let longest = 0;
    let i = 0;

    while (i < n) {
        let up = 0;
        let down = 0;

        // Uphill
        while (i + 1 < n && arr[i] < arr[i + 1]) {
            up++;
            i++;
        }

        // Downhill
        while (i + 1 < n && arr[i] > arr[i + 1]) {
            down++;
            i++;
        }

        // Valid mountain
        if (up > 0 && down > 0) {
            longest = Math.max(longest, up + down + 1);
        }

        // If we didn't move, avoid infinite loop
        if (up === 0 && down === 0) {
            i++;
        }
    }

    return longest;
};

console.log(longestMountain([0,1,2,3,4,5,4,3,2,1,0]));
