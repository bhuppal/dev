// const form = document.querySelector('.form');

// form.addEventListener('submit', (e) => {
//   e.preventDefault();
//   const formData = new FormData(e.currentTarget);
//   const values = [...formData.values()];

//   if (values.includes('')) {
//     console.log('please enter all values');
//     return;
//   }
//   const formObject = Object.fromEntries(formData);
//   // do something
//   console.log(formObject);

//   e.currentTarget.reset();
// });

const from = document.querySelector('.form');
// const nameInput = document.querySelector('.name-input');
// const emailInput = document.querySelector('.email-input');
// const passwordInput = document.querySelector('.password-input');

// from.addEventListener('submit', (e) => {
//     e.preventDefault();
//     const nameValue = nameInput.value;
//     const emailValue = emailInput.value;
//     const passwordValue = passwordInput.value;

//     if(!nameValue || !emailValue || !passwordValue) {
//         console.log('Please provide some value');
//         return;
//     }

//     console.log(nameValue, emailValue, passwordValue);
//     // const formData = new FormData(e.currentTarget);

//     // console.log(formData);
// });

from.addEventListener('submit', (e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    console.log(formData);
    const formKeys = [...formData.keys()];
    console.log(formKeys);

    const formValues = [...formData.values()]
    console.log(formValues);
})