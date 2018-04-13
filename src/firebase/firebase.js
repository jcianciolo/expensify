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

firebase.database().ref().set({
    name: 'John Cianciolo'
});