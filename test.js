export default function debounce(func, wait = 0) {
  let timeoutID = null;
  return function (...args) {
    const context = this;
    clearTimeout(timeoutID);

    timeoutID = setTimeout(function () {
      timeoutID = null;
      func.apply(context, args);
    }, wait);
  };
}

let i = 0;
function increment() {
  i++;
}
const debouncedIncrement = debounce(increment, 10000);

// t = 0: Call debouncedIncrement().
debouncedIncrement();
