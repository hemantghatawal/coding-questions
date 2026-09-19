  // https://leetcode.com/problems/valid-parentheses/
/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
  let stack = [];

  for (let i = 0; i < s.length; i++) {
    console.log("stack =>", stack);
    if (s[i] === "(" || s[i] === "[" || s[i] === "{") {
      stack.push(s[i]);
    } else {
        console.log("else => ", s[i], stack[stack.length - 1])
      if (s[i] === ")" && stack[stack.length - 1] === "(") {
        stack.pop()
      } else if (s[i] === "]" && stack[stack.length - 1] === "[") {
        stack.pop()
      } else if (s[i] === "}" && stack[stack.length - 1] === "{") {
        stack.pop()
      } else {
        return false
      }
    }
  }

  console.log("end",stack)
  return stack.length === 0 ? true : false;
};

console.log(isValid("(){}[]"));
