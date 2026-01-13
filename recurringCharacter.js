// Google Question
// Givent an array = [1,2,3,2]
// It should return 2

// Givent an array = [2,5,1,3,4,1,10,5]
// It should return 1

// Givent an array = [2,5,1,3]
// It should return undefined

function recurringCharacter(array) {
  const obj = {};
  for (let i = 0; i < array.length; i++) {
    if (obj[array[i]]) {
      return array[i];
    } else {
      obj[array[i]] = array[i];
    }
  }

  return undefined;
}

const data = [2, 5, 1, 3];

console.log(recurringCharacter(data));
