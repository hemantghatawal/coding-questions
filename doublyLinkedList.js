// 10 --> 15 --> 12

class NewNode {
  constructor(value) {
    this.value = value;
    this.previous = null;
    this.next = null;
  }
}

class DoublyLinkedList {
  constructor(value) {
    this.head = {
      value: value,
      previous: null,
      next: null,
    };

    this.tail = this.head;
    this.length = 1;
  }

  // done
  append(value) {
    const newNode = new NewNode(value);
    newNode.previous = this.tail;
    this.tail.next = newNode;
    this.tail = newNode;
    this.length++;
  }
  
  // done
  prepend(value) {
    const newNode = new NewNode(value);
    newNode.next = this.head;
    this.head = newNode;
    this.length++;
  }
  
  // done
  insert(index = 0, value) {
    if (index >= this.length) {
      return this.append(value);
    }
    
    if (index === 0) {
      return this.prepend(value);
    }
    
    const newNode = new NewNode(value);
    const leaderNode = this.traverseToIndex(index - 1);
    newNode.next = leaderNode.next;
    newNode.previous = leaderNode;
    leaderNode.next = newNode;
    this.length++;
    return this.printList();
  }
  
  remove(index) {
    if (index === 0) {
      return this.head = this.head.next;
    }
    
    if (index > this.length) {
      index = this.length - 1;
    }
    
    const leaderNode = this.traverseToIndex(index - 1);
    const removeNode = leaderNode.next;
    leaderNode.next = removeNode.next;
    leaderNode.previous = removeNode.previous;
    this.length--;
    return this.printList();
  }
  
  // done
  traverseToIndex(index) {
    let i = 0;
    let currentNode = this.head;
    while (i !== index) {
      currentNode = currentNode.next;
      i++;
    }
    return currentNode;
  }
  
  // done
  printList() {
    const array = [];
    let currentNode = this.head;
    while (currentNode !== null) {
      array.push(currentNode.value);
      currentNode = currentNode.next;
    }

    console.log(array);
    return array;
  }
}

const myLinkedList = new DoublyLinkedList(100);
myLinkedList.prepend(1);
myLinkedList.append(10);
myLinkedList.append(15);
myLinkedList.insert(1, 99);
myLinkedList.remove(99);
myLinkedList.printList();
// console.log(myLinkedList.remove(1));
// console.log();
// console.log(myLinkedList);
