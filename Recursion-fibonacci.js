function findFibonacciRecursive(number) {}

function findFibonacciIterative(number) {
  if (number === 0) return 0;
  if (number === 1) return 1;

  let a = 0;
  let b = 1;
  for (let i = 2; i <= number; i++) {
    const fibo = a + b;
    // console.log(fibo)
    a = b;
    b = fibo;
  }
  return b;
}

console.log(findFibonacciIterative(0));
console.log(findFibonacciIterative(1));
console.log(findFibonacciIterative(2));
console.log(findFibonacciIterative(3));
console.log(findFibonacciIterative(4));
console.log(findFibonacciIterative(5));
