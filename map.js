const people = [
    { name: 'bob',
        age: 20,
        position: 'developer',
    },
    {
        name: 'anna',
        age: 22,
        position: 'designer',
    },
    {
        name: 'peter',
        age: 23,
        position: 'the boss',
    },
    {
        name: 'susan',
        age: 20,
        position: 'intern',
    },
]
// get the age
const ages = people.map(person => {
    return person.age
});
console.log(ages);

const getAges = (person) => person.age;

const age2 = people.map(getAges);
console.log(age2);

// return object
const objPerson = people.map( (person) => {
    return {
     firstName:  person.name.toUpperCase(),
        oldAge: person.age + 20,
        position: person.position.toUpperCase(),
    }
});

console.log(objPerson);

const names = people.map((person) => `<h1>${person.name}</h1>`);

const result = document.querySelector('#result');

result.innerHTML = names.join('');
console.log(result)