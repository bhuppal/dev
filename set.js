const menu = [
    {
        name: 'pancake',
        catergory: 'breakfast',
    },
    {
        name: 'burger',
        catergory: 'lunch',
    },
    {
        name: 'steak',
        catergory: 'dinner',
    },
    {
        name: 'eggs',
        catergory: 'breakfast',
    },
    {
        name: 'pizza',
        catergory: 'lunch',
    },
    {
        name: 'salad',
        catergory: 'dinner',
    },
];

const categories = menu.map((item) => item.catergory);
const uniqueCatergories = [... new Set(categories)];
console.log(categories);
console.log(uniqueCatergories);