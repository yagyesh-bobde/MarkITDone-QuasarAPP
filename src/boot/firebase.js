// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, onAuthStateChanged } from "firebase/auth";



const firebaseConfig = {
  apiKey: "AIzaSyA0uXs4FpMtTruhq4BUHDjf9odaFFsRd2Y",
  authDomain: "portal-329814.firebaseapp.com",
  projectId: "secure-portal-329814",
  storageBucket: "secure-portal-329814.appspot.com",
  messagingSenderId: "968551836553",
  appId: "1:968551836553:web:e573e72638ccb72a5a4f58",
  measurementId: "G-9R6R0L11RE"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

const auth = getAuth(firebaseApp);

export default { auth }