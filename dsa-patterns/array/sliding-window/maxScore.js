// https://leetcode.com/problems/maximum-points-you-can-obtain-from-cards/
/**
 * @param {number[]} cardPoints
 * @param {number} k
 * @return {number}
 */
var maxScore = function (cardPoints, k) {
    const n = cardPoints.length;

    let totalSum = 0;
    for (const card of cardPoints) {
        totalSum += card;
    }

    const windowSize = n - k;

    // Edge case: k === n
    if (windowSize === 0) return totalSum;

    let windowSum = 0;

    // First window
    for (let i = 0; i < windowSize; i++) {
        windowSum += cardPoints[i];
    }

    let minWindowSum = windowSum;

    // Sliding window
    for (let i = windowSize; i < n; i++) {
        windowSum += cardPoints[i] - cardPoints[i - windowSize];
        minWindowSum = Math.min(minWindowSum, windowSum);
    }

    return totalSum - minWindowSum;
};

const cardPoints = [9,7,7,9,7,7,9] //[11, 49, 100, 20, 86, 29, 72];
const k = 7 //4;

console.log(maxScore(cardPoints, k));
