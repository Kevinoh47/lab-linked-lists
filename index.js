'use strict';

const LinkedList = require('./linked-list.js');

// let dinnerList = new LinkedList();
// console.log(dinnerList);
// dinnerList.append('cheese');
// dinnerList.append('wine');
// dinnerList.append('veggie');
// dinnerList.append('salad');
// dinnerList.append('carb');
// dinnerList.append('main');
// dinnerList.append('dessert');

// // append works
// console.log('');
// console.log('testing append...');
// console.log('');
// console.log(dinnerList);
// console.log('');

// // prepend works.
// console.log('testing prepend...');
// console.log('');
// console.log(dinnerList);
// console.log('');
// console.log('prepending...');
// console.log('');
// dinnerList.prepend('appertif');
// console.log(dinnerList);
// console.log('');

let carList = new LinkedList();
carList.append('Austin Healy');
carList.append('BMW i');
carList.append('Chevy Volt');
carList.append('Dodge Viper');
carList.append('Ford Focus Electric');
carList.append('Nissan Leaf');
carList.append('Tesla Model C');

console.log('');

// reverse still not quite working .
// console.log('');
// console.log('test reverse function ...');
// console.log('');
// console.log(carList);
// console.log('');
// console.log('reversing...');
// console.log('');
// carList.reverse();
// console.log(carList);
// console.log('');
// console.log('reversing back to original...');
// console.log('');
// carList.reverse();
// console.log(carList);

// // remove works!
// console.log('test remove function ...');
// console.log(carList);
// console.log('');
// console.log('removing...');
// console.log('');
// carList.remove(0);
// console.log(carList);

// // insertBefore works
// console.log('');
// console.log('test insertBefore...');
// console.log('');
// console.log(carList);
// console.log('');
// console.log('inserting in front of head...');
// console.log('');
// carList.insertBefore('BMW i', 'Astin Marton');
// console.log(carList);
// console.log('');
// console.log('inserting in front of second item...');
// console.log('');
// carList.insertBefore('BMW i', 'Audi Quattro');
// console.log(carList);

// insertAfter
console.log('');
console.log('test insertAfter...');
console.log('');
console.log(carList);
console.log('');
console.log('inserting after head...');
console.log('');
carList.insertAfter('Austin Healy', 'BMW AAAAA');
console.log(carList);
console.log('');
console.log('inserting after second item...');
console.log('');
carList.insertAfter('BMW AAAAA', 'BMW BBBBBB');
console.log(carList);

