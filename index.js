'use strict';

const LinkedList = require('./linked-list.js');


let carList = new LinkedList();
console.log(carList);

carList.append('Austin Healy');
carList.append('BMW i');
carList.append('Chevy Volt');
carList.append('Dodge Viper');
carList.append('Nissan Leaf');
carList.append('Tesla Model C');

console.log(carList);


// let dinnerList = new LinkedList();
// console.log(dinnerList);
// dinnerList.append('cheese');
// dinnerList.append('wine');
// dinnerList.append('veggie');
// dinnerList.append('salad');
// dinnerList.append('carb');
// dinnerList.append('main');
// dinnerList.append('dessert');

// prepend works!
// console.log(dinnerList);
// console.log('testing prepend...');
// dinnerList.prepend('appertif');
// console.log(dinnerList);

console.log(carList);
// console.log('test reverse function');
// carList.reverse();

// remove works!
console.log('test remove function');
carList.remove(0);
console.log(carList);

