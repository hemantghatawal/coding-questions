let data = [10, 4, 25, 1, 99 , 34]


let max = data[0] 
let min = data[0]
data.forEach(ele => {
    if(ele > max){
        max = ele
    }

    if(ele < min){
        min = ele
    }
});

console.log(min)
console.log(max)