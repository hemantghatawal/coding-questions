// works only in one level nested arrays ->
function findMostRepeated(input) {
  const count = {};
  // i need to check if it's an array or value

  function checkCountValue(key) {
    //  count[key] = (count[key] || 0) + 1;
    if (count[key]) {
      count[key]++;
    } else {
      count[key] = 1;
    }
  }

  // outer loop
  for (let item of input) {
    if (Array.isArray(item)) {
      // inner loop for only arrays
      for (let i of item) {
        checkCountValue(i);
      }
    } else {
      checkCountValue(item);
    }
  }

  console.log(count);
  // from the count obj get the max value
  let maxKey = Object.keys(count)[0];
  for (let key in count) {
    if (count[key] > count[maxKey]) {
      maxKey = key;
    }
  }

  return { [maxKey]: count[maxKey] };
}

// const nestedArr = [[1, 2, 2], [3, 3, 1], 2]; // => {2: 3}
// console.log(findMostRepeated(nestedArr));

function findMostRepeatedDeepNested(input) {
  const count = {};

  function traverse(value) {
    if (Array.isArray(value)) {
      for (let item of value) {
        traverse(item); // go deeper
      }
    } else {
      count[value] = (count[value] || 0) + 1;
    }
  }

  traverse(input);

  let maxKey = Object.keys(count)[0];
  for (let key in count) {
    if (count[key] > count[maxKey]) {
      // use >= if you want to return the max value
      maxKey = key;
    }
  }

  return { [maxKey]: count[maxKey] };
}

const arr = [1, [2, [2, 3, [3, 3]], 1, 4, 4, 4, 5, 5, 5, 5, 5], 2];
console.log(findMostRepeatedDeepNested(arr));
