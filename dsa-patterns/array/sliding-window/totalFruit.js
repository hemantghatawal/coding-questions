/**
 * @param {number[]} fruits
 * @return {number}
 */
var totalFruit = function (fruits) {
  let left = 0;
  let maxLength = 0;
  const count = new Map();

  for (let right = 0; right < fruits.length; right++) {
    // Add current fruit
    count.set(fruits[right], (count.get(fruits[right]) || 0) + 1);

    // More than 2 types → shrink window
    while (count.size > 2) {
      const fruit = fruits[left];
      count.set(fruit, count.get(fruit) - 1);

      if (count.get(fruit) === 0) {
        count.delete(fruit);
      }

      left++;
    }

    // Current window is valid
    maxLength = Math.max(maxLength, right - left + 1);
  }

  return maxLength;
};

const fruits = [3, 3, 3, 1, 2, 1, 1, 2, 3, 3, 4];
console.log(totalFruit(fruits));
