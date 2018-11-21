
'use strict';

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
    this.previous = null; // for doubly-linked link list
  }
}

module.exports = Node;