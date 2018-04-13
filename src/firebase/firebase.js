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

database.ref().set({
    name: 'John Cianciolo',
    age: 25,
    isSingle: true,
    location: {
        city: 'Redwood City',
        country: 'United States'
    }
}).then(() => {
    console.log('Data is saved');
}).catch((e) => {
    console.log('This failed.', e);
});

// database.ref().set('This is my data.');
// database.ref('age').set(26);
// database.ref('location/city').set('San Mateo');

database.ref('attributes').set({
    height: 75,
    weight: 180
}).then(() => {
    console.log('Saved new attributes');
}).catch((e) => {
    console.log('That failed.', e);
});
