// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyA_D7K6L6II32o-aw6-aimB01-d6F0DTNM",
  authDomain: "clone-d9b8d.firebaseapp.com",
  projectId: "clone-d9b8d",
  storageBucket: "clone-d9b8d.appspot.com",
  messagingSenderId: "151650550634",
  appId: "1:151650550634:web:a9600668557295544b1b13",
  measurementId: "G-6EQCB8VJZK"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };