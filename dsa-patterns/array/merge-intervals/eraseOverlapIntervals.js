// https://leetcode.com/problems/non-overlapping-intervals/
/**
 * @param {number[][]} intervals
 * @return {number}
 */
var eraseOverlapIntervals = function (intervals) {
    intervals.sort((a, b) => a[1] - b[1]);

    let count = 0;
    let prevEnd = -Infinity;

    for (let [start, end] of intervals) {
        if (start >= prevEnd) {
            prevEnd = end;
        } else {
            count++;
        }
    }

    return count;
};