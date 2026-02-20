const arr = [100, 6, 5, 3, 1, 8, 88, 7, 2, 4];

function bubbleSort(arr) {
  let rightIndex = arr.length - 1;

  while (rightIndex > 0) {
    let pointer1 = 0;
    let pointer2 = 1;

    while (pointer2 <= rightIndex) {
      if (arr[pointer1] > arr[pointer2]) {
        //swap
        let temp = arr[pointer1];
        arr[pointer1] = arr[pointer2];
        arr[pointer2] = temp;
      }
      pointer1++;
      pointer2++;
    }
    rightIndex--;
  }

  return arr;
}

console.log(bubbleSort(arr));

// another sokution
// function bubbleSort(array) {
//   const length = array.length;

//   for (let i = 0; i < length; i++) {
//     for (let j = 0; j < length - 1 - i; j++) {
//       if (array[j] > array[j + 1]) {
//         let temp = array[j];
//         array[j] = array[j + 1];
//         array[j + 1] = temp;
//       }
//     }
//   }
//   return array;
// }
