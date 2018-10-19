'use strict';

const Node = require('./node.js');

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
  // Big O for time: O(3n)
  // Big O for space: O(2n)
  reverse() {
    let current = this.head;
    let myPrevious = null;

    while (current.next) {
      current.previous = myPrevious;
      myPrevious = current;
      current = current.next;
    }
    // set the tail:
    if (current.next === null) {
      current.previous = myPrevious;
      this.head = current; // the last shall be first
    }

    // now iterate backwards
    while (current.previous) {
      current.next = current.previous;
      current = current.previous;
    }
    // set the tail:
    if (current.previous === null) {
      current.next = null;
    }

    // clean up
    while (current.next) {  
      delete current.previous;
      current = current.next;
    }
    if (current.next === null) {
      delete current.previous;
    }
    
    return this;
  }

  // remove a node from the linked list
  // Big O for time: O(n)
  // Big O for space O(1)
  remove(offset) {
    let current = this.head;
    let counter = 0;
    let previous;

    // remove the head
    if (current === this.head && counter === offset) {
      this.head = current.next;
      current.next = null;
      this.length--;
      return this;
    }
    // remove one from inside
    while (current.next) {
      if (counter === offset) {
        previous.next = current.next;
        current.next = null;
        this.length--;
        return this;
      }
      previous = current;
      current = current.next;
      counter++;
    }
    // removing the tail
    if (!current.next && counter === offset) {
      previous.next = null;
      this.length--;
    }
    return this;
  }

  // hmm... but what if the value isn't JSON?
  // Big O for time: O(n)
  // Big O for space O(2n)
  // serialize() {
  //   let current = this.head;
  //   while (current.next) {
  //     return JSON.stringify(this.current.value);
  //   }
  //   //don't forget the tail:
  //   if (!current.next) {
  //     return JSON.stringify(this.current.value);
  //   }
  // }

  // Big O for time: O(n)
  // Big O for space O(2n)
  // deserialize() {
  //   let current = this.head;
  //   while (current.next) {
  //     return JSON.parse(current.value); 
  //   }
  //   //don't forget the tail:
  //   if (!current.next) {
  //     return JSON.parse(current.value); 
  //   }
  // }
}

module.exports = LinkedList;