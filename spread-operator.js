const udemy = 'udemy';
const letter = [...udemy];
console.log(letter);


const boys = ['john', 'peter', 'bob'];
const girls = ['susan', 'anna'];

const bestFriend = 'arnold';


const friends = [...boys, ...girls, bestFriend];
console.log(friends);

// reference
const newFriends = friends;
newFriends[0] = 'nancy';
console.log(friends);
console.log(newFriends);

// copy
const newlyFriends = [...friends]
newlyFriends[0] = 'Bhuppal'
console.log(friends);
console.log(newlyFriends);

// ES2018 - ES8 Objects

const person = { name: 'john', job: 'developer' };
// const newPerson = {...person};
const newPerson = person;
console.log(person, newPerson);
newPerson['city'] = 'chicago';
console.log(newPerson, person);