// faster/easier way to access/unpack variables from arrays, objects

const fruits = ['apple', 'banana', 'orange', 'grape', 'kiwi', 'mango', 'pear', 'peach', 'plum', 'strawberry'];
const friends = ['alice', 'bob', 'charlie', 'david', 'edward', 'frank', 'george', 'harry', 'ian', 'james'];

const fruit1 = fruits[0];
const fruit2 = fruits[1];
const fruit3 = fruits[2];

console.log(fruit1, fruit2, fruit3);

const [alice, bob, charlie] = friends;

console.log(alice, bob, charlie);

const [q,, s,,d] = friends;
console.log(q, s, d);

let first = 'bhuppal'
let second = 'kumar'

let temp = second;
second = first;
first = temp;
console.log(first, second)



let first1 = 'bhuppal';
let second1 = 'kumar';

[first1, second1] = [second1, first1];  // Destructuring swap

console.log(first1, second1);