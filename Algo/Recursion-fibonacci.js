function fibonacciRecursive(n) {
  if (n < 2) return n;

  return fibonacciRecursive(n - 1) + fibonacciRecursive(n - 2);
}

function fibonacciIterative(number) {
  // another solution
  const arr = [0, 1];
  for (let i = 2; i <= number; i++) {
    arr.push(arr[i - 2] + arr[i - 1]);
  }
  return arr[number];

  // if (number === 0) return 0;
  // if (number === 1) return 1;

  // let a = 0;
  // let b = 1;
  // for (let i = 2; i <= number; i++) {
  //   const fibo = a + b;
  //   // console.log(fibo)
  //   a = b;
  //   b = fibo;
  // }
  // return b;
}

// console.log(fibonacciRecursive(8));
console.log(fibonacciIterative(1));
console.log(fibonacciIterative(2));
console.log(fibonacciIterative(3));
console.log(fibonacciIterative(4));
console.log(fibonacciIterative(5));
