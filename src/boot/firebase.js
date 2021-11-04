// Import the functions you need from the SDKs you need
import { getDatabase } from 'firebase/database'
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA0uXs4FpMtTruhq4BUHDjf9odaFFsRd2Y",
  authDomain: "portal-329814.firebaseapp.com",
  databaseURL: "https://portal-329814-62a26.firebaseio.com",
  projectId: "secure-portal-329814",
  storageBucket: "secure-portal-329814.appspot.com",
  messagingSenderId: "968551836553",
  appId: "1:968551836553:web:e573e72638ccb72a5a4f58",
  measurementId: "G-9R6R0L11RE"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
const firebaseAuth = getAuth(firebaseApp);

const firebaseDb = getDatabase(firebaseApp)


export  { firebaseAuth , firebaseDb}