// https://leetcode.com/problems/maximum-length-substring-with-two-occurrences/?envType=problem-list-v2&envId=sliding-window
/**
 * @param {string} s
 * @return {number}
 */
var maximumLengthSubstring = function(s) {
    let maxLength = 0
    let charCount = {}

    let left = 0;
    for(let right = 0; right < s.length; right++){
        charCount[s[right]] = (charCount[s[right]] || 0) + 1 

        while(charCount[s[right]] > 2){
            charCount[s[left]]--
            left++
        }
        maxLength = Math.max(maxLength, right - left + 1)
    }

    return maxLength
};

console.log(maximumLengthSubstring("bcbbbcba"))