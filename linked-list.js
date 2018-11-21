'use strict';

const Node = require('./node.js');

class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.next = null;
    this.previous = null;
    this.length = 0;
  }

  append(value) {
    let node = new Node(value);
  
    // first node is head and tail
    if (!this.head) {
      this.head = node;
      this.tail = node;
      this.length = 1;
      return this;
    }

    
    let current = this.head;

    while(current.next) {
      current = current.next;
    }
    // append the new node to the tail:
    current.next = node;
    node.previous = current;
    this.tail = node;
    this.length++;
    return this;
  }

  // prepend adds a new node to the beginning of the linked list
  // Big O for time:  O(1)
  // Big O for space: O(1)  
  prepend(value) {
    let node = new Node(value);

    //first node for the linked list (e.g. empty ll)
    if (! this.head) {
      this.head = node;
      this.tail = node;
      this.length = 1;
      return this;
    }

    // prepend node to the head
    let newSecondNode = this.head;
    this.head = node;
    node.next = newSecondNode;
    newSecondNode.previous = this.head;
    this.length++;
    return this;
  }

  // reverse the linked list so that the "tail" is now head 
  // Big O for time: O(3n)
  // Big O for space: O(3n) ??
  reverse() {
    let myArr = [];
    let current = this.head;

    while(current.next) {
      myArr.push(current.value);
      current = current.next;
    }
    // tail
    if (!current.next) {
      myArr.push(current.value);
    }
    
    myArr.reverse();

    let myLl = new LinkedList();

    myArr.map(i => {myLl.append(i);});

    return myLl;

  }

  reverse2() {
    let current = this.head;
    let reversedLl = new LinkedList();

    while (current.next) {

      let copy = new Node(current.value);
      copy.previous = current.next;
      copy.next = current.previous;

      if (current === this.head) {
        reversedLl.tail = copy;
      }
      current = current.next;
    }

    if (!current.next) {
      let newHead = new Node(current.value);
      newHead.next = current.previous;
      reversedLl.head = newHead;
      reversedLl.length = this.length;
    }

    return reversedLl;
  }

  // remove a node from the doubly-linked list
  // Big O for time: O(n)
  // Big O for space O(1)
  remove(offset) {
    let current = this.head;
    let counter = 0;
    let myPrevious;

    if (offset >= 0 && offset <= this.length) {

      // remove the head
      if (current === this.head && counter === offset) {
        this.head = current.next;
        current.next = null;
        this.head.previous = null;
        this.length--;
        return this;
      }

      // remove one from inside  
      while (current.next) {
        if (counter === offset) {
          myPrevious.next = current.next;
          current.next = null;
          current.previous = null;
          this.length--;
          return this;
        }
        myPrevious = current;
        current = current.next;
        counter++;
      }
      
      // removing the tail
      if (!current.next && counter === offset) {
        myPrevious.next = null;
        current.previous = null;
        this.tail = myPrevious;
        this.length--;
      }
      return this;
    } else {
      return null; // should this throw an error instead?
    }
  }

  // Serialize
  // Big O for time: O(n)
  // Big O for space O(2n)
  serialize() {
    let serialized = '['; 
    let current = this.head;
    while (current.next) {
      if (current.value) {
        serialized += JSON.stringify(current.value) + ', ';
      }
      current = current.next;
    }
    // the tail:
    if (!current.next) {
      if (current.value) {
        serialized += JSON.stringify(current.value) + ']';
      }
      else {
        serialized = serialized.substr(0, serialized.trim().length-1) + ']';
      }
    }
    return serialized;
  }

  // deserialize 
  deserialize() {
    let serialized = this.serialize();
    return JSON.parse(serialized);
  }

}

class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  // Append adds a new node to the end of the linked list
  // Big O for time: O(n) -- linear
  // Big O for space O(1)
  append(value) {
    let node = new Node(value);

    // first node for the linked list (e.g. empty ll)
    if (!this.head) {
      this.head = node;
      this.tail = node;
      this.length ++;
      return this;
    }
    // appending subsequent nodes to the end of the linked list
    let current = this.head;

    // find the last node, which will have a next value of null
    while (current.next) {
      current = current.next;
    }

    // break out of the loop, and the current node's next is null. Set next to the new node
    current.next = node;
    this.tail = node;
    this.length++;
    return this;
  }

  // prepend adds a new node to the beginning of the linked list
  // Big O for time:  O(1)
  // Big O for space: O(1)  
  prepend(value) {
    let node = new Node(value);

    //first node for the linked list (e.g. empty ll)
    if (! this.head) {
      this.head = node;
      this.tail = node;
      this.length++;
      return this;
    }

    // prepend node to the head
    let newSecondNode = this.head;
    this.head = node;
    node.next = newSecondNode;
    this.length++;
    return this;
  }

  // reverse the linked list so that the "tail" is now head 
  // Big O for time: O(3n)
  // Big O for space: O(3n) ??
  reverse() {
    let myArr = [];
    let current = this.head;

    while(current.next) {
      myArr.push(current.value);
      current = current.next;
    }
    // tail
    if (!current.next) {
      myArr.push(current.value);
    }
    
    myArr.reverse();

    let myLl = new LinkedList();

    myArr.map(i => {myLl.append(i);});

    return myLl;

  }

  // remove a node from the linked list
  // Big O for time: O(n)
  // Big O for space O(1)
  remove(offset) {
    let current = this.head;
    let counter = 0;
    let myPrevious;

    if (offset >= 0 && offset <= this.length) {

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
          myPrevious.next = current.next;
          current.next = null;
          this.length--;
          return this;
        }
        myPrevious = current;
        current = current.next;
        counter++;
      }
      // removing the tail
      if (!current.next && counter === offset) {
        myPrevious.next = null;
        this.tail = myPrevious;
        this.length--;
      }
      return this;
    } else {
      return null; // should this throw an error instead?
    }
  }

  // insert newValue immediately before the node containing value
  insertBefore(value, newValue) {
    let newNode = new Node(newValue);
    let current = this.head;
    let myPrevious;

    while(current.next) {
      if (current.value === value) {
        // head
        if (current === this.head) {
          newNode.next = current;
          this.head = newNode;
          this.length++;
          return this;
        }

        // inside
        myPrevious.next = newNode;
        newNode.next = current;
        this.length++;
        return this;
      }
      myPrevious = current;
      current = current.next;
    }
    //test the tail
    if (current.next === null) {
      if (current.value === value){
        myPrevious.next = newNode;
        newNode.next = current;
        this.tail = current;
        this.length++;
        return this;
      }
    }
    return null;
  }

  // insert newValue immediately after the node containing value
  insertAfter(value, newValue) {
    let newNode = new Node(newValue);
    let current = this.head;

    while(current.next) {
      if (current.value === value){
        newNode.next = current.next;
        current.next = newNode;
        this.length++;
        return this;
      }
      current = current.next;
    }
    //test the tail
    if (current.next === null) {
      if (current.value === value) {
        newNode.next = null;
        current.next = newNode;
        this.tail = newNode;
        this.length++;
        return this;
      }
    }
    return null;
  }

  // return the value of the nodethat is k from the END of the linked list
  ll_kth_from_end(k) {
    if (Number.isInteger(k) && k > -1) {
      let current = this.head;
      let valueArr = [];
      let index = -1;
  
      // find the last node, which will have a next value of null
      while (current.next) {
        
        valueArr.push(current.value);
        current = current.next;
        index++;
      }
      if (current.next === null) {
        valueArr.push(current.value);
        index++;
      }
  
      let finalIndex = (index - k);
      if (Number.isInteger(finalIndex) && finalIndex > -1) {
        return valueArr[finalIndex];
      }
      return false;
    }
  }

  // Serialize
  // Big O for time: O(n)
  // Big O for space O(2n)
  serialize() {
    let serialized = '['; 
    let current = this.head;
    while (current.next) {
      if (current.value) {
        serialized += JSON.stringify(current.value) + ', ';
      }
      current = current.next;
    }
    //don't forget the tail:
    if (!current.next) {
      if (current.value) {
        serialized += JSON.stringify(current.value) + ']';
      }
      else {
        serialized = serialized.substr(0, serialized.trim().length-1) + ']';
      }
    }
    return serialized;
  }

  // deserialize 
  deserialize() {
    let serialized = this.serialize();
    return JSON.parse(serialized);
  }

}

module.exports = LinkedList;