import * as firebase from 'firebase';

const config = {
    apiKey: "AIzaSyBNNr6hDZsLxeRCHYRXsWJVZBAPI9ws8ZM",
    authDomain: "expensify-ea570.firebaseapp.com",
    databaseURL: "https://expensify-ea570.firebaseio.com",
    projectId: "expensify-ea570",
    storageBucket: "expensify-ea570.appspot.com",
    messagingSenderId: "182875561845"
};
firebase.initializeApp(config);

const database = firebase.database();

database.ref().on('value', (snapshot) => {
    const val = snapshot.val();
    console.log(`${val.name} is a ${val.job.title} at ${val.job.company}`);
});

// const onValueChange = database.ref().on('value', (snapshot) => {
//     console.log(snapshot.val());
// }, (e) => {
//     console.log('Error with data fetching', e);
// });

// setTimeout(() => {
//     database.ref('age').set(29);
// }, 3500);

// setTimeout(() => {
//     database.ref().off(onValueChange);
// }, 7000);


// setTimeout(() => {
//     database.ref('age').set(30);
// }, 10500);


// database.ref('location/city')
//     .once('value')
//     .then((snapshot) => {
//         const val = snapshot.val();
//         console.log(val);
//     })
//     .catch((e) => {
//         console.log('Error fetching data', e);
// });

// database.ref().set({
//     name: 'John Cianciolo',
//     age: 25,
//     stressLevel: 6,
//     job: {
//         title: 'Software Developer',
//         company: 'Google'
//     },
//     location: {
//         city: 'Redwood City',
//         country: 'United States'
//     }
// }).then(() => {
//     console.log('Data is saved');
// }).catch((e) => {
//     console.log('This failed.', e);
// });

// database.ref().update({
//     stressLevel: 9,
//     'job/company': 'Amazon',
//     'location/city': 'Seattle',
// });

// const isSingleData = firebase.database().ref();
// isSingleData.remove()
//     .then(() => {
//         console.log('Data removed.');
//     }).catch((e) => {
//         console.log('error removing data: ', e);
// });