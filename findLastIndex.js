/**
 * This function returns the index of the last element in the array that satisfies the provided testing function.
 * Otherwise, it returns -1.
 *
 * @param {Array} array - The array to search.
 * @param {Function} predicate - The function invoked per iteration.
 * @param {number} [fromIndex=array.length-1] - The index to start searching backwards from.
 * @returns The index of the found element, else -1.
 */
export default function findLastIndex(
  array,
  predicate,
  fromIndex = array.length - 1
) {
  const length = array.length;
  if (!length) return -1;
  // convert negative to postive and negative out of bound
  if (fromIndex < 0) {
    fromIndex = -fromIndex > length ? 0 : length + fromIndex;
  }

  // handle +ve out of bound
  if (fromIndex >= length) {
    fromIndex = length - 1;
  }

  for (let i = fromIndex; i >= 0; i--) {
    if (predicate(array[i], i, array)) {
      return i;
    }
  }

  return -1;
}

console.log(findLastIndex([1, 2, 3, 4, 5], (value) => value > 3, -2));

//  const arr = [1, 2, 3, 4, 5];
//   25 |     // fromIndex = -2 resolves to index 3 (5 + -2 = 3)
//   26 |     // Checks index 3: 4 > 3 is true. Returns 3.
// > 27 |     expect(findLastIndex(arr, (value) => value > 3, -2)).toEqual(3);
//      |                                                          ^
//   28 |   });
//   30 |   test('handles negative out of bound indices correctly', () => {

//     expect(received).toEqual(expected) // deep equality

// Expected: 2
// Received: -1

//   148 |     const arr = [10, 5, 20]; // length 3
//   149 |     // fromIndex = -1 resolves to index 2 (3 + -1 = 2)
//   150 |     // Check 2: 20 > 15 (true) -> index 2
// > 151 |     expect(findLastIndex(arr, (value) => value > 15, -1)).toEqual(2);
//       |                                                           ^
//   152 |     // Check 2: 20 < 15 (false)
//   153 |     // Check 1: 5 < 15 (true) -> index 1
//   154 |     expect(findLastIndex(arr, (value) => value < 15, -1)).toEqual(1);
