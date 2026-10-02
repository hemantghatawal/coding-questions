// https://leetcode.com/problems/maximum-points-you-can-obtain-from-cards/
/**
 * @param {number[]} cardPoints
 * @param {number} k
 * @return {number}
 */
var maxScore = function (cardPoints, k) {
  let sum = 0;
  let left = 0;
  let right = cardPoints.length - 1;
  let count = k;
  while (count > 0) {
    if (cardPoints[right] >= cardPoints[left]) {
      sum += cardPoints[right];
      right--;
    } else {
      sum += cardPoints[left];
      left++;
    }
    count--;
  }

  return sum;
};

const cardPoints = [11,49,100,20,86,29,72]
const k = 4;

console.log(maxScore(cardPoints, k));
