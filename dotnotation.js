// dot notation
const person = {
    name: 'john',
};

console.log(person.name);

person['age'] = 90;
person.gender = 'male'
console.log(person);

// sqaure notation

const item = {
    'featured-item': ['item1', 'item2', 'item3']
};

console.log(item["featured-item"]);
console.log(item)

const appState = 'loading';
sppState = 'error'
const app = {
    appState: true
};
console.log(app);

const state = {
    loading:true,
    name:'',
    job:'',
}

function updateState(key, value) {
    state[key] = value;
}

updateState('name', 'jack')
updateState('job', 'developer')
updateState('loading', false)
console.log(state)

updateState('product', [])
console.log(state)