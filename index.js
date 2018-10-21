'use strict';

const LinkedList = require('./linked-list.js');

let dinnerList = new LinkedList();
console.log(dinnerList);
dinnerList.append('cheese');
dinnerList.append('wine');
dinnerList.append('veggie');
dinnerList.append('salad');
dinnerList.append('carb');
dinnerList.append('main');
dinnerList.append('dessert');

// append works
console.log('testing append...');
console.log(dinnerList);

// prepend works.
console.log('testing prepend...');
console.log(dinnerList);
console.log('prepending...');
dinnerList.prepend('appertif');
console.log(dinnerList);

let carList = new LinkedList();
carList.append('Austin Healy');
carList.append('BMW i');
carList.append('Chevy Volt');
carList.append('Dodge Viper');
carList.append('Ford Focus Electric');
carList.append('Nissan Leaf');
carList.append('Tesla Model C');

// reverse works.
// console.log('test reverse function ...');
// console.log(carList);
// console.log('reversing...');
// carList.reverse();
// console.log(carList);

// remove works!
console.log('test remove function ...');
console.log(carList);
console.log('removing...');
carList.remove(0);
console.log(carList);

console.log('test insertBefore...');
console.log(carList);
console.log('inserting in front of head...');
carList.insertBefore('BMW i', 'Astin Marton');
console.log(carList);

