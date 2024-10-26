// Import the necessary Firebase modules
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyDfZwrQrcA0wj12MZlppOX_ZZmbwuVnlOU",
    authDomain: "date-53175.firebaseapp.com",
    projectId: "date-53175",
    storageBucket: "date-53175.appspot.com",
    messagingSenderId: "763732294522",
    appId: "1:763732294522:web:05f01dd81cc964b4d174c3",
    measurementId: "G-K50DJ2E6FJ"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

// Initialize Firestore
const database = getFirestore(firebaseApp);

export default database;