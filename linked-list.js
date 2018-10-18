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

    // break out of the loop, and the current node's next is null. Set next to the new node
    current.next = node;
    return this;
  }

  // prepend adds a new node to the beginning of the linked list
  // Big O for time:  O(1)
  // Big O for space: O(1)  
  prepend(value) {
    let node = new Node(value);

    // first node for the linked list
    if (! this.head) {
      this.head = node;
      return this;
    }

    // prepend node to the head
    let newSecondNode = this.head;
    this.head = node;

    // reset linked list head
    node.next = newSecondNode;

    return this;
  }

  reverse() {
    let previous = null;
    let current = this.head;
    let newNext = this.head.next;
    
    while (current.next) {
      if (previous === null) {
        previous = current; 
        current.next = null; //this will now be the tail
      }
      else {
        current.next = newNext;
        newNext = previous;
      }
    }
    
    return this;
  }
}

module.exports = LinkedList;