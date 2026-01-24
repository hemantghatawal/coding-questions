class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

// implented Stack using Linked List
class Stack {
  constructor() {
    this.top = null;
    this.bottom = null;
    this.length = 0;
  }

  peek() {
    return this.top.value; // or this.top
  }
  push(value) {
    const newNode = new Node(value);
    newNode.next = this.top;
    this.top = newNode;

    // setting this.bottom if we add the first item in stack
    if (this.length === 0) {
      this.bottom = newNode;
    }

    this.length++;
    return this;
  }

  pop() {
    // if stack is empty
    if (!this.top) {
      // or this.length === 0
      return null;
    }

    if (this.top === this.bottom) {
      // or this.length === 1, length should be always accurate
      this.bottom - null;
    }

    const removedNode = this.top;
    this.top = removedNode.next;
    this.length--;

    return removedNode;
  }
  isEmpty() {
    return this.length === 0 ? true : false;
  }
}

const myStack = new Stack();
myStack.push(10);
myStack.push(100);
myStack.push(200);
myStack.push(500);
console.log(myStack.peek());
console.log(myStack.isEmpty());
console.log(myStack);
