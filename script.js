class LinkedList {
  constructor() {
    this.head = null;
    this.size = 0;
  }

  append(value) {
    if (this.head == null) {
      this.head = new Node(value, this.head);
      return;
    }

    let current = this.head;
    let previous;

    while (current != null) {
      previous = current;
      current = current.nextNode;
    }
    previous.nextNode = new Node(value, current);
    this.size++;
  }

  prepend(value) {
    this.head = new Node(value, this.head);
    this.size++;
  }
  size() {
    return this.size;
  }
  head() {
    return this.head;
  }
  tail() {
    let current = this.head;
    let counter = 0;
    while (counter < this.size - 1) {
      counter++;
      current = current.nextNode;
    }
    return current;
  }
  at(index) {
    if (index < 0 || index > this.size) return;
    let current = this.head;
    let counter = 0;
    while (counter < this.size) {
      if (counter == index) return current;
      counter++;
      current = current.nextNode;
    }
  }

  pop() {
    let current = this.head;
    let previous;
    let counter = 0;
    while (counter < this.size - 1) {
      previous = current;
      counter++;
      current = current.nextNode;
    }
    previous.nextNode = current.nextNode;
    this.size--;
  }

  contains(value) {
    let current = this.head;
    let counter = 0;
    while (counter < this.size) {
      if (current.value == value) return true;
      counter++;
      current = current.nextNode;
    }
    return false;
  }

  find(value) {
    let current = this.head;
    let counter = 0;
    while (counter < this.size) {
      if (current.value == value) return current;
      counter++;
      current = current.nextNode;
    }
    return "Not existing in list";
  }

  insertAt(value, index) {
    if (index > this.size) return "Index do not exist";
    let current = this.head;
    let previous;
    let counter = 0;
    while (counter != index) {
      previous = current;
      counter++;
      current = current.nextNode;
    }
    previous.nextNode = new Node(value, current);
    this.size++;
  }

  removeAt(index) {
    if (index > this.size || index < 0) return "Index do not exist";
    let current = this.head;
    let previous;
    let counter = 0;
    while (counter != index) {
      previous = current;
      counter++;
      current = current.nextNode;
    }

    previous.nextNode = current.nextNode;
    this.size--;
  }

  toString() {
    let current = this.head;
    let counter = 0;
    let string = "";
    while (counter < this.size) {
      string += ` (${current.value}) ->`;
      counter++;
      current = current.nextNode;
      if (counter == this.size) string += ` null`;
    }
    console.log(string);
  }
}

class Node {
  constructor(value, nextNode = null) {
    this.value = value;
    this.nextNode = nextNode;
  }
}

li = new LinkedList();

li.prepend(2);
li.prepend(1);
li.prepend(0);
li.prepend(3);

console.log(li.removeAt(-1));

li.toString();
