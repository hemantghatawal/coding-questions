/**
 * @param {number} value The number to check.
 * @param {number} [start=0] The start of the range.
 * @param {number} end The end of the range.
 * @returns {boolean} Returns `true` if `number` is in the range, else `false`.
 */
export default function inRange(value, start, end) {
  //  If only 2 arguments are specified, the second argument becomes end and start is set to 0.
  if (arguments.length === 2) {
    end = start;
    start = 0;
  }

  if (start > end) {
    // 8 = 5 + 3
    start = start + end;
    // 5 = 8 - 3
    end = start - end;
    // 3 = 8 - 5
    start = start - end;
  }

  if (value >= start && value < end) {
    return true;
  } else {
    return false;
  }
}

console.log(inRange(3, 5));
