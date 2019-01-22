class Node {
  constructor(value) {
    (this.value = value), (this.next = null);
  }
}

class LinkedList {
  constructor(value) {
    this.head = {
      value,
      next: null
    };
    this.tail = this.head;
    this.length = 1;
  }

  append(value) {
    const node = new Node(value);
    // this line to acess the latest node next field in the linkedList
    this.tail.next = node;
    // this will replace the tail with a new node
    this.tail = node;
    this.length++;
    return this;
  }

  prepend(value) {
    const node = new Node(value);
    node.next = this.head;
    this.head = node;
    this.length++;
    return this;
  }
}

const myLinkedList = new LinkedList(1);

myLinkedList.append(2);
myLinkedList.append(5);
myLinkedList.prepend(7);

console.log(JSON.stringify(myLinkedList));
