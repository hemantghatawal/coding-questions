function findFactorialRecursive(number) {
  if (number === 0 || number === 1) {
    return 1;
  }
//   if (number === 2) {
//     return 2;
//   }


  console.log("number =>", number);
  return number * findFactorialRecursive(number - 1);
}

function findFactorialIterative(number) {
  if (number === 0 || number === 1) return 1;
  let answer = number;

  for (let i = number - 1; i > 0; i--) {
    answer = answer * i;
  }

  return answer;
}

// const i = findFactorialIterative(5);
const r = findFactorialRecursive(5);
// console.log(i);
console.log(r);
