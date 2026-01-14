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

  printList() {
    const array = [];
    let flag = true;
    let currentNode = this.head;
    while (flag) {
      array.push(currentNode.value);
      if (currentNode.next === null) {
        flag = false;
      }
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

myLinkedList.printList();

console.log(myLinkedList);
