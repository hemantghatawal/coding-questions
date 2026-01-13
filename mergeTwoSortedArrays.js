function mergeTwoSortedArrays(arr1, arr2) {
  let mergedArray = [];

  let i = 0;
  let j = 0;

  while (i < arr1.length && j < arr2.length) {
    if (arr1[i] <= arr2[j]) {
      console.log(arr1[i]);
      mergedArray.push(arr1[i]);
      i++;
    } else {
      console.log(arr2[j]);
      mergedArray.push(arr2[j]);
      j++;
    }
  }

  if (i < arr1.length) mergedArray.push(...arr1.slice(i));
  if (j < arr2.length) mergedArray.push(...arr2.slice(j));

  return mergedArray;
}

// const result = mergeTwoSortedArrays(
//   [1, 2, 4, 31],
//   [3, 4, 10, 30, 32, 100, 999]
// );

const result = mergeTwoSortedArrays([0, 3, 4, 31], [4, 6, 30]);
console.log(result);
