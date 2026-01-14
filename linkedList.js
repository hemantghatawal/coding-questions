// 10 --> 15 --> 12

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
    const newNode = {
      value: value,
      next: null,
    };
    this.tail.next = newNode;
    this.tail = newNode;
    this.length++;
  }

  prepend(value) {
    const newNode = {
      value: value,
      next: null, // this.head
    };
    newNode.next = this.head;
    this.head = newNode;
    this.length++;
  }
}

const myLinkedList = new LinkedList(100);
myLinkedList.append(10);
myLinkedList.append(15);
myLinkedList.prepend(3);

console.log(myLinkedList);
