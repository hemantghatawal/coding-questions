const arr = [1, 2, 3, 4, 5, 3, 2, 3, 1, 12, 3, 1, 0, 1];
const obj = {}

for (let i = 0; i < arr.length; i++) {
  if(typeof obj[arr[i]] == 'undefined'){
    obj[arr[i]] = 1
  } else{
    obj[arr[i]]++ 
  }
}

console.log(obj);
