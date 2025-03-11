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

// filter
const result = people.filter((person) => person.age === 20)
console.log(result)

const intern = people.filter((item) => item.position === 'intern')
console.log(intern);

// no match
const noMatchData = people.filter((item) => item.position === 'abc')
console.log(noMatchData);

// Find
const noMatchAge = people.find((item) => item.age > 35)
console.log(noMatchAge)

const personSearch = people.find((item) => item.age < 35)
// always find returns only one object
console.log(personSearch)