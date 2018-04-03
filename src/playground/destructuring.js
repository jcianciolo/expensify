// const person = {
//     name: 'John',
//     age: 25,
//     location: {
//         city: 'Redwood City',
//         temp: 70
//     }
// };

// const { name = 'Anonymous', age } = person;
// console.log(`${name} is ${age}.`);

// const { city, temp: temperature } = person.location;
// if (city && temperature) {
//     console.log(`It's ${temperature} in ${city}.`);
// }

// const book = {
//     title: 'Ego is the Enemy',
//     author: 'Ryan Holiday',
//     publisher: {
//         name: 'Penguin'
//     }
// };

// const { name: publisherName = 'Self-Published' } = book.publisher;
// console.log(publisherName);

//
// Array Destructuring
//

const address = ['823 Southport Drive', 'Redwood City', 'California', '94065'];

const [, city, state = 'New York'] = address;
console.log(`You are in ${city}, ${state}.`);

const item = ['Coffee (iced)', '$3.00', '$3.50', '$3.75'];

const [drink, , medium] = item;
console.log(`A medium ${drink} costs ${medium}.`);