// https://leetcode.com/problems/palindrome-number/description/
var isPalindrome = function(x) {
    if(x < 0 ) return false;

    let original = x;
    let reversed = 0;

    while(x > 0){
        const lastDigit = x % 10;
        console.log("lastDigit => ", lastDigit)
        reversed = (reversed* 10) + lastDigit
        x = Math.floor(x / 10)

        console.log(x)
    }
    return original === reversed
};


console.log(isPalindrome(10101))