function flattenArray(input) {
  let newArray = [];

  for (let i in input) {
    if (!Array.isArray(input[i])) {
      newArray.push(input[i]);
    } else {
      const flat = flattenArray(input[i]);
      newArray = [...newArray, ...flat];
    }
  }

  return newArray;
}

const nestedArray = [12, 3, [45, 14, [1, 2, 3, [546]]]];

console.log(flattenArray(nestedArray));
