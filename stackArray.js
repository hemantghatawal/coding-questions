// implented Stack using Array
class Stack {
  constructor() {
    this.data = new Array()
  }

  peek() {
    return this.data[this.data.length - 1];
  }
  push(value) {
   return this.data.push(value)
  }
  
  pop() {
    return this.data.pop()
  }
  isEmpty() {
    return this.data.length === 0 ? true : false;
  }
}

const myArrayStack = new Stack();
myArrayStack.push(10);
myArrayStack.push(100);
myArrayStack.push(200);
myArrayStack.push(500);
myArrayStack.pop()
console.log(myArrayStack.peek());
console.log(myArrayStack.isEmpty());
console.log(myArrayStack);
