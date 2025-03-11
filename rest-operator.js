// Rest Operator...
// gathers/collects items
// destructuring, functions
// placement important, careful with the same name
// rest when declare function, spread when invoke the function


// arrays
const fruits = ['apple', 'banana', 'orange', 'mango'];
const [first, second,  ...restOfTheFruits] = fruits

console.log(first, second, restOfTheFruits);

const specificFruit = restOfTheFruits.find(fruit => fruit === 'lemon')

console.log(specificFruit);

// object
const person = { firstName: 'Bhuppal', lastName: 'Kumar', job: 'developer' };
const { firstName, ...rest  } = person;
console.log(firstName, rest);


// function
const getAverage = (name, ...scores) => {
    console.log(name);
    console.log(scores);
    const averageScore = scores.reduce((total, item, idx) => {
        total = total + item; 
        return total;
    }, 0)/scores.length
    console.log(averageScore);
}


// getAverage(person.firstName, 89, 76, 81, 100);

const testScores = [23, 45, 67, 89];
getAverage(person.firstName, ...testScores);

