export default async function promiseAll(iterable) {
  const promiseResult = [];
  for (let i of iterable) {
    try {
      const resolve = await new Promise((resolve) => {
        resolve(i);
      });

      promiseResult.push(resolve);
    } catch (e) {
      throw new Error(e);
    }
  }

  return promiseResult;
}

// const p0 = Promise.resolve(3);
// const p1 = 42;
// const p2 = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve("foo");
//   }, 100);
// });

// const data = await promiseAll([p0, p1, p2]); // [3, 42, 'foo']
// console.log(data);

// Rejection example.
const p3 = Promise.resolve(30);
const p4 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject("An error occurred!");
  }, 100);
});

try {
  await promiseAll([p3, p4]);
} catch (err) {
  console.log(err); // 'An error occurred!'
}
