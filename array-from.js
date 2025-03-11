const udemy = 'udemy';

console.log([...udemy]);
console.log(Array.from(udemy));

const str = `<h2 className='title'>Array.from</h2>
        <div className='container'>
            <h2 className='text'>hello</h2>
            <h2 className='text'>person</h2>
            <h2 className='text'>hello</h2>
        </div>`

// console.log(str);

const newText = Array.from(str).find((item) => item.textContent === 'persnn');
// console.log(newText);

const items = Array.from({ length: 120}, (_, index) => {
    return index;
})

const itemsPerPage = 10
const pages = Math.ceil(items.length / itemsPerPage)

const newItems = Array.from({length:pages}, (_, index) => {
    const start = index * itemsPerPage;
    const tempItems = items.slice(start, start + itemsPerPage)
    return tempItems
})

console.log(newItems);