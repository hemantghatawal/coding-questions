// Google Question
// Givent an array = [1,2,3,2]
// It should return 2

// Givent an array = [2,5,1,3,4,1,10,5]
// It should return 1

// Givent an array = [2,5,1,3]
// It should return undefined

// Givent an array = [2,0,0,3]
// It should return 0

function recurringCharacter(array) {
  const obj = {};
  for (let i = 0; i < array.length; i++) {
    if (obj[array[i]] !== undefined) {
      // (2) or this undefined condition
      return array[i];
    } else {
      obj[array[i]] = array[i]; // (1) either here true or 👆
    }
  }

  return undefined;
}

const data = [2, 0, 0, 3];

console.log(recurringCharacter(data));
