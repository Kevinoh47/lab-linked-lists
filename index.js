'use strict';

const LinkedList = require('./linked-list.js');

let dinnerList = new LinkedList();


dinnerList.append('cheese');
dinnerList.append('wine');
dinnerList.append('veggie');
dinnerList.append('salad');
dinnerList.append('carb');
dinnerList.append('main');

console.log('dinner list:', dinnerList);

// ll_kth_from_end
console.log('');
console.log('last food: ', dinnerList.ll_kth_from_end(0));
console.log('one food from the end: ', dinnerList.ll_kth_from_end(1));
console.log('second food from the end: ', dinnerList.ll_kth_from_end(2));
console.log('third food from the end: ', dinnerList.ll_kth_from_end(3));
console.log('fourth food from the end: ', dinnerList.ll_kth_from_end(4));
console.log('fifth food from the end (first food): ', dinnerList.ll_kth_from_end(5));
console.log('sixth food from end (should be false): ', dinnerList.ll_kth_from_end(6));


// append works
console.log('');
console.log('testing append... should have a dessert and an incremented count.');
dinnerList.append('dessert');
console.log('');
console.log(dinnerList);
console.log('');

// prepend works.
console.log('testing prepend...');
console.log('');
console.log(dinnerList);
console.log('');
console.log('prepending appertif... count should be incremented.');
console.log('');
dinnerList.prepend('appertif');
console.log(dinnerList);
console.log('');

let carList = new LinkedList();
carList.append('Austin Healy');
carList.append('BMW i');
carList.append('Chevy Volt');
carList.append('Dodge Viper');
carList.append('Ford Focus Electric');
carList.append('Nissan Leaf');
carList.append('Tesla Model C');
console.log('');
console.log('car list:' , carList);

// ll_kth_from_end
console.log('');
console.log('last car: ', carList.ll_kth_from_end(0));
console.log('one car from the end: ', carList.ll_kth_from_end(1));
console.log('second car from the end: ', carList.ll_kth_from_end(2));
console.log('third car from the end: ', carList.ll_kth_from_end(3));
console.log('fourth car from the end: ', carList.ll_kth_from_end(4));
console.log('fifth car from the end : ', carList.ll_kth_from_end(5));
console.log('sixth car from the end (the first in the list): ', carList.ll_kth_from_end(6));
console.log('seventh car from the end (should be false): ', carList.ll_kth_from_end(7));

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

// remove works!
console.log('test remove function ...');
console.log(carList);
console.log('');
console.log('removing the first car on the list...');
console.log('');
carList.remove(0);
console.log(carList);

// insertBefore works
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

// insertAfter NOTE THAT THESE VALUES MAY CHANGE DEPENDNING ON WHICH TESTS RAN FIRST...
console.log('');
console.log('test insertAfter... the beginning carlist:');
console.log('');
console.log(carList);
console.log('');
console.log('inserting after head...');
console.log('');
carList.insertAfter('BMW i', 'BMW AAAAA');
console.log(carList);
console.log('');
console.log('inserting after second item...');
console.log('');
carList.insertAfter('BMW AAAAA', 'BMW BBBBBB');
console.log(carList);

console.log('fifth car from the end: ', carList.ll_kth_from_end(5));
console.log('sixth car from the end: ', carList.ll_kth_from_end(6));
console.log('seventh car from the end: ', carList.ll_kth_from_end(7));





