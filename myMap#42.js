// Array.prototype.myMap = function (callbackFn, thisArg) {
//   console.log(callbackFn, thisArg, this);
//   const array = [];

//   for (let i = 0; i < this.length; i++) {
//     array.push(callbackFn(this[i]));
//   }

//   return array;
// };

// console.log([1, 2, 3, 4, 5, 6].myMap((i) => 1));

"use strict";

[1, 2, 3].map(function (num) {
  console.log("callback this:", this);
});
