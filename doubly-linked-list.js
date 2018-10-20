'use strict';

const DoublyNode = require('./doubly-node.js');

class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  // Append adds a new node to the end of the linked list
  // Big O for time: 
  // Big O for space 
  append(value) {
    let dnode = new DoublyNode(value);

    // first node for the linked list
    if (! this.head) {
      this.head = dnode;
      this.tail = dnode;
      this.length ++;
      return this;
    }

    // appending subsequent nodes to the end of the doubly linked list
    let last = this.tail;

    // break out of the loop, and the current node's next is null. Set next to the new node
    last.next = dnode;
    dnode.previous = last;
    this.length++;
    return this;
  }

  // prepend adds a new node to the beginning of the linked list
  // Big O for time:  O(1)
  // Big O for space: O(1)  
  prepend(value) {
    let dnode = new DoublyNode(value);

    // // first node for the linked list
    // if (! this.head) {
    //   this.head = node;
    //   return this;
    // }

    // prepend node to the head
    let newSecondNode = this.head;
    dnode.next = newSecondNode;
    newSecondNode.previous = dnode;

    // reset linked list head
    this.head = dnode;
    
    return this;
  }

  // reverse the linked list so that the "tail" is now head 
  // Big O for time: O(3n)
  // Big O for space: O(2n)
  reverse() {

    
    return this;
  }

  // remove a node from the linked list
  // Big O for time: 
  // Big O for space 
  remove(offset) {
    let current = this.head;
    let counter = 0;
    let previous;

    // remove the head
    if (current === this.head && counter === offset) {

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
  //     return JSON.stringify(this.current);
  //   }
  //   //don't forget the tail:
  //   if (!current.next) {
  //     return JSON.stringify(this.current);
  //   }
  // }

  // Big O for time: O(n)
  // Big O for space O(2n)
  // deserialize() {
  //   let current = this.head;
  //   while (current.next) {
  //     return JSON.parse(current); 
  //   }
  //   //don't forget the tail:
  //   if (!current.next) {
  //     return JSON.parse(current); 
  //   }
  // }
}

module.exports = DoublyLinkedList;