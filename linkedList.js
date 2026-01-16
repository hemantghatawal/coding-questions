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
    console.log("leader node 👉", leaderNode);
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
}

const myLinkedList = new LinkedList(100);
myLinkedList.append(10);
myLinkedList.append(15);
myLinkedList.prepend(3);
myLinkedList.insert(1, 300);

myLinkedList.printList();
console.log();
console.log(myLinkedList);
