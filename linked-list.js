'use strict';

const Node = require('node.js');

class LinkedList {
  constructor() {
    this.head = null;
    this.length = 0;
  }

  // Append adds a new node to the end of the linked list
  // Big O for time: O(n) -- linear
  // Big O for space O(1)
  append(value) {
    let node = new Node(value);

    // first node for the linked list
    if (! this.head) {
      this.head = node;
      this.length ++;
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
    this.length++;
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

  // reverse the linked list so that the "tail" is now head 
  // Big O for time: O(n)
  // Big O for space: O(1)
  reverse() {
    let previous = null;
    let current = this.head;
    let newNext = this.head.next;
    let setNewHead = false;
    
    while (current.next && !setNewHead) {
      if (previous === null) {
        previous = current; 
        current.next = null; //this will now be the tail
      }
      else {
        if (!current.next) {
          this.head = current; // last is now first.
          setNewHead = true;
        }
        current.next = newNext;
        newNext = previous;
      }
    }
    return this;
  }

  // remove a node from the linked list
  remove(offset) {
    let current = this.head;
    let counter = 1;
    let previous = current;

    while (current.next) {
      // removing the head
      if (current === this.head) {
        current.next = null;
        this.length--;
        break;
      }
      else if (counter === offset) {
        // remove one from inside
        if (current.next !== null) {
          previous.next = current.next;
          current.next = null;
          this.length--;
          break;
        }
        // remove last node
        else if (current.next === null) {
          previous.next = null;
          this.length--;
          break;
        }
      }
      previous = current;
      current = current.next;
      counter++;
    }
    return this;
  }
}

module.exports = LinkedList;