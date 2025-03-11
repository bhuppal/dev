// Reduce
// Iterates over a list of elements, returning a single result.
// Reduce is a very powerful method that can be used to create a variety of different things.
// 1st parameter: callback function
// 2nd parameter: initial value
// accumulator: total of all calculations
// currentValue: current value in the iteration
// index: index of the current value

const staff = [
    { name: 'bob',
        age: 20,
        position: 'developer',
        salary: 100,
    },
    {
        name: 'anna',
        age: 22,
        position: 'designer',
        salary: 300,
    },
    {
        name: 'peter',
        age: 23,
        position: 'the boss',
        salary: 400,
    },
    {
        name: 'susan',
        age: 20,
        position: 'intern',
        salary: 10,
    },  
]

const dailySalaryTotal = staff.reduce((total, person) => {
    total += person.salary
    return total 
}, 0)

console.log(dailySalaryTotal)