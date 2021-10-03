import firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyDY19JqH3i8S5wcTH3x6krYx9NCoGW0Rzs",
  authDomain: "banking-app-6b7f8.firebaseapp.com",
  projectId: "banking-app-6b7f8",
  storageBucket: "banking-app-6b7f8.appspot.com",
  messagingSenderId: "686305299330",
  appId: "1:686305299330:web:23633c72f811e42e2b9d9b"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export {db, auth};