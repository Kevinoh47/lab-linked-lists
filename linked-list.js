'use strict';

const Node = require('node.js');

class LinkedList {
  constructor() {
    this.head = null;
  }

  // Append adds a new node to the end of the linked list
  // Big O for time: O(n) -- linear
  // Big O for space O(1)
  append(value) {
    let node = new Node(value);

    // first node for the linked list
    if (! this.head) {
      this.head = node;
      return this;
    }

    // appending subsequent nodes to the linked list
    let current = this.head;

    // find the last node, which will have a next value of null
    while (current.next) {
      current = current.next;
    }

    // once we find the node with next is null, set next to the new node
    current.next = node;
    return this;
  }
}

module.exports = LinkedList;