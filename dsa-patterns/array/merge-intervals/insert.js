// https://leetcode.com/problems/insert-interval/
/**
 * @param {number[][]} intervals
 * @param {number[]} newInterval
 * @return {number[][]}
 */
var insert = function (intervals, newInterval) {
  let result = [];
  let i = 0;

  // 1. Add intervals completely before newInterval
  while (i < intervals.length && intervals[i][1] < newInterval[0]) {
    result.push(intervals[i]);
    i++;
  }

  // 2. Merge all overlapping intervals
  while (i < intervals.length && intervals[i][0] <= newInterval[1]) {
    newInterval[0] = Math.min(newInterval[0], intervals[i][0]);
    newInterval[1] = Math.max(newInterval[1], intervals[i][1]);
    i++;
  }

  // Add the merged interval
  result.push(newInterval);

  // 3. Add remaining intervals
  while (i < intervals.length) {
    result.push(intervals[i]);
    i++;
  }

  return result;
};

console.log(
  insert(
    [
      [1, 2],
      [3, 5],
      [6, 7],
      [8, 10],
      [12, 16],
    ],
    [4, 8],
  ),
);