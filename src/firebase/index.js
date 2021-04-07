import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: "AIzaSyDYHTKz4ANt5dFpm9a4ZgV8ZerfHYS9bb0",
  authDomain: "red-wire-89bb8.firebaseapp.com",
  projectId: "red-wire-89bb8",
  storageBucket: "red-wire-89bb8.appspot.com",
  messagingSenderId: "1074312365122",
  appId: "1:1074312365122:web:8b57446bcdc01de79219db",
  measurementId: "G-VQQ0FM68ZS"
}

firebase.initializeApp(config);

const DB = firebase.firestore();
const usersCollection = DB.collection('users');

export {
  firebase,
  usersCollection
}
