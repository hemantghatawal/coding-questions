// https://leetcode.com/problems/minimum-absolute-difference/
/**
 * @param {number[]} arr
 * @return {number[][]}
 */
var minimumAbsDifference = function(arr) {
    arr.sort((a,b) => a- b)

    const diffMap = {}
    
    for(let i = 1; i < arr.length; i++){
        let diff = Math.abs(arr[i] - arr[i - 1])
        if(diffMap[diff]){
            diffMap[diff].push([arr[i - 1], arr[i]])
        } else {
            diffMap[diff] = [[arr[i - 1], arr[i]]]
        }
    }

    return diffMap[Object.keys(diffMap)[0]];
};

console.log(minimumAbsDifference([3,8,-10,23,19,-4,-14,27])) //Output: [[1,2],[2,3],[3,4]]
