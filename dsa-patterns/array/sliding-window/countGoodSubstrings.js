/**
 * @param {string} s
 * @return {number}
 */
var countGoodSubstrings = function (s) {
  if (s.length < 3) return 0;
  let countGS = 0;
  for (let i = 2; i < s.length; i++) {
    if (s[i - 2] !== s[i - 1]) {
      if (s[i - 2] !== s[i]) {
        if (s[i - 1] !== s[i]) {
          countGS++;
        }
      }
    }
  }

  return countGS;
};

console.log(countGoodSubstrings("aababcabc"));
