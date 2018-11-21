'use strict';

const LinkedList = require('../linked-list.js');

let myLL = new LinkedList();
myLL.append('The');
myLL.append('quick');
myLL.append('brown');
myLL.append('fox');
myLL.append('jumped');
myLL.append('over');
myLL.append('the');
myLL.append('lazy');

describe ('The linked list kth from end method', () => {
  it('can find the first element of the Linked List', () => {
    let result = myLL.ll_kth_from_end(7);
    expect(result).toEqual('The');
  });
  it('can find the last element of the Linked List', () => {
    let result = myLL.ll_kth_from_end(0);
    expect(result).toEqual('lazy');
  });
  it('can find an element in the middle of the Linked List', () => {
    let result = myLL.ll_kth_from_end(3);
    expect(result).toEqual('jumped');
  });
  it('returns false for a bad input value', () => {
    let result = myLL.ll_kth_from_end(-47);
    expect(result).toBeFalsy;
  });
});

describe ('The linked list append method', () => {
  it('can add an element to the end of the linked list', () => {
    myLL.append('dog');
    let result = myLL.ll_kth_from_end(0);
    expect(result).toEqual('dog');
  });
});

describe ('The linked list prepend method', () => {

  let testLL = new LinkedList();

  it('can add a node to an empty linked list', () => {
    testLL.prepend(100);
    expect(testLL.length).toEqual(1);
  });

  it('can add nodes to the front of a linked list', () => {
    testLL.prepend(200);
    expect(testLL.head.value).toEqual(200);
  });

  it('increments the length property of a linked list', () => {
    expect(testLL.length).toEqual(2);
  });
});

describe ('The linked list insertBefore method', () => {
  it('can insert an element at the beginning of the linked list', () => {
    myLL.insertBefore('The', '>>>>');
    let result = myLL.ll_kth_from_end(9);
    expect(result).toEqual('>>>>');
  });

  it('can insert an element before the last element of the linked list', () => {
    myLL.insertBefore('dog', '...');
    let result = myLL.ll_kth_from_end(1);
    expect(result).toEqual('...');
  });
});

describe ('The linked list insertAfter method', () => {
  it('can insert an element after the beginning of the linked list', () => {
    myLL.insertAfter('>>>>', '!!!');
    let result = myLL.ll_kth_from_end(10);
    expect(result).toEqual('!!!');
  });

  it('can insert a new last element into the linked list', () => {
    myLL.insertAfter('dog', '!!!!!!!');
    let result = myLL.ll_kth_from_end(0);
    expect(result).toEqual('!!!!!!!');
  });
});

describe ('The linked list reverse method', () => {
  it('can reverse a linked list', () => {
    let input = [1,2,3,4,5,6,7];
    let reverseMe = new LinkedList();
    input.map(i => {reverseMe.append(i);});
    let results = reverseMe.reverse();

    expect(results.head.value).toEqual(7);
    expect(results.tail.value).toEqual(1);
  });
});

describe ('The linked list remove method', () => {
  it('can remove a node from a particular offset in the middle of the linked list', () => {
    let input = [1,2,3,4,5,6,7];
    let testMe = new LinkedList();
    input.map(i => {testMe.append(i);});
    let results = testMe.remove(3);
    let newIndex3 = results.ll_kth_from_end(2);

    expect(results.length).toEqual(6);
    expect(newIndex3).toEqual(5);
  });
  it('can remove a node from the beginning of the linked list', () => {
    let input = [1,2,3,4,5,6,7];
    let testMe = new LinkedList();
    input.map(i => {testMe.append(i);});
    let results = testMe.remove(0);
    let newIndex3 = results.ll_kth_from_end(5);

    expect(results.length).toEqual(6);
    expect(newIndex3).toEqual(2);
    expect(results.head.value).toEqual(2);
  });
  it('can remove a node from the end of the linked list', () => {
    let input = [1,2,3,4,5,6,7];
    let testMe = new LinkedList();
    input.map(i => {testMe.append(i);});
    let results = testMe.remove(6);
    let newIndex3 = results.ll_kth_from_end(0);

    expect(results.length).toEqual(6);
    expect(newIndex3).toEqual(6);
    expect(results.tail.value).toEqual(6);
  });
});

describe('The linked list serialize method', () => {
  it('can serialize a linked list', () => {
    let carList = new LinkedList();
    carList.append('Austin Healy');
    carList.append('BMW i');
    carList.append('Chevy Volt');
    carList.append('Dodge Viper');
    carList.append('Ford Focus Electric');
    carList.append('Nissan Leaf');
    carList.append('Tesla Model C');

    let results = carList.serialize();
    expect(results).toBe('["Austin Healy", "BMW i", "Chevy Volt", "Dodge Viper", "Ford Focus Electric", "Nissan Leaf", "Tesla Model C"]');
  });
});

describe('The linked list deserialize method', () => {
  it('can deserialize a linked list', () => {
    let carList = new LinkedList();
    carList.append('Austin Healy');
    carList.append('BMW i');
    carList.append('Chevy Volt');
    carList.append('Dodge Viper');
    carList.append('Ford Focus Electric');
    carList.append('Nissan Leaf');
    carList.append('Tesla Model C');

    let results = carList.deserialize();
    expect(results).toEqual([ 'Austin Healy',
      'BMW i',
      'Chevy Volt',
      'Dodge Viper',
      'Ford Focus Electric',
      'Nissan Leaf',
      'Tesla Model C' ]);
  });
});


