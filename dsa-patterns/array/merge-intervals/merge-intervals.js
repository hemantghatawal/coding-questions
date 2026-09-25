// https://leetcode.com/problems/merge-intervals/
/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function (intervals) {
  // intervals length <= 1, return intervals
  if (intervals.length <= 1) return intervals;

  // sort
  intervals.sort((a, b) => a[0] - b[0]);

  console.log("sorted =>", intervals);
  let result = [intervals[0]];

  for (let i = 1; i < intervals.length; i++) {
     let current = intervals[i];
     let last = result[result.length - 1];
     // Overlapping
    if (current[0] <= last[1]) {
      last[1] = Math.max(last[1], current[1]);
    }  // Not overlapping
    else {
      result.push(current);
    }
  }

  return result;
};

console.log(
  merge([
    [1, 4],
    [0, 2],
    [3, 5],
  ]),
);
