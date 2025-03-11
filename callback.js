function makeUppercase(value) {
    console.log(value.toUpperCase())
};

// makeUppercase('Bhuppal');

function handleName(name, cb) {
    const fullName = `${name} KUMAR`
    cb(fullName)
}

handleName('bhuppal', makeUppercase)

function reverseString(value) {
    console.log(value.split('').reverse().join(''));
}

handleName('bhuppal', reverseString);

handleName('bhuppal', value =>  console.log(value));
