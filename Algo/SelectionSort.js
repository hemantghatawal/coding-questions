const arr = [1000, 6, 5, 3, 1, 8, 88, 7, 2, 4];

function selectionSort(arr) {
  let i = 0;

  let minValue = arr[i];
  let minIndex = i;

  let track = 0;

  while (track < arr.length - 1) {
    if (i === arr.length) {
      const temp = arr[track];
      arr[track] = minValue;
      arr[minIndex] = temp;

      i = ++track;
      //reset
      minValue = arr[track];
      minIndex = track;
    }

    if (arr[i] < minValue) {
      minValue = arr[i];
      minIndex = i;
    }
    i++;
  }

  return arr;
}

function selectionSort2(array) {
  const length = array.length;

  for (let i = 0; i < length; i++) {
    // set current index as minimum
    let min = i;
    let temp = array[i];

    for (let j = i + 1; j < length; j++) {
      if (array[j] < array[min]) {
        // update minimum if current is lower than what we had previously
        min = j;
      }
    }

    array[i] = array[min];
    array[min] = temp;
  }

  return array;
}

console.log(selectionSort(arr));
console.log(selectionSort2(arr));
