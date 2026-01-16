// 10 --> 15 --> 12

class NewNode {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor(value) {
    this.head = {
      value: value,
      next: null,
    };

    this.tail = this.head;
    this.length = 1;
  }

  append(value) {
    const newNode = new NewNode(value);
    this.tail.next = newNode;
    this.tail = newNode;
    this.length++;
  }

  prepend(value) {
    const newNode = new NewNode(value);
    newNode.next = this.head;
    this.head = newNode;
    this.length++;
  }

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
    leaderNode.next = newNode;
    this.length++;
    return this.printList();
  }

  remove(index) {
    if (index === 0) {
      return (this.head = this.head.next);
    }

    if (index > this.length) {
      index = this.length - 1;
    }

    const leaderNode = this.traverseToIndex(index - 1);
    const removeNode = leaderNode.next;
    leaderNode.next = removeNode.next;
    this.length--;
    return this.printList();
  }

  traverseToIndex(index) {
    let i = 0;
    let currentNode = this.head;
    while (i !== index) {
      currentNode = currentNode.next;
      i++;
    }
    return currentNode;
  }

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

  reverse() {
    if (!this.head.next) {
      // or this.length === 1
      return this.head;
    }

    let first = this.head;
    this.tail = this.head;
    let second = this.head.next;

    while (second) {
      const temp = second.next;
      second.next = first;
      first = second;
      second = temp;
    }
    this.head.next = null;
    this.head = first;
    return this.printList();
  }
}

const myLinkedList = new LinkedList(100);
myLinkedList.append(10);
myLinkedList.append(15);
myLinkedList.prepend(3);
myLinkedList.printList();
console.log(myLinkedList.reverse());

console.log(myLinkedList);
