// https://leetcode.com/problems/maximum-points-you-can-obtain-from-cards/
/**
 * @param {number[]} cardPoints
 * @param {number} k
 * @return {number}
 */
var maxScore = function (cardPoints, k) {
  let totalSum = 0;
  for (let i = 0; i < cardPoints.length; i++) {
    totalSum += cardPoints[i];
  }

  let window = cardPoints.length - k;
  let sum = 0;
  for (let i = 0; i < window; i++) {
    sum += cardPoints[i];
  }

  let minSum = sum
  for (let i = window; i < cardPoints.length; i++) {
    sum = sum + cardPoints[i] - cardPoints[i - window];
    if (sum < minSum) minSum = sum;
  }

  return totalSum - minSum;
};

const cardPoints = [9,7,7,9,7,7,9] //[11, 49, 100, 20, 86, 29, 72];
const k = 7 //4;

console.log(maxScore(cardPoints, k));
