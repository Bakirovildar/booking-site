import {initializeApp} from "firebase/app";
import {getDatabase, ref, push, off, query, limitToLast, get} from "firebase/database";

const firebaseConfig = {
    apiKey: "AIzaSyDgSXf5KN3Pzw7SRmjat-W6KjYM1uWpp_g",
    authDomain: "booking-my.firebaseapp.com",
    projectId: "booking-my",
    storageBucket: "booking-my.appspot.com",
    messagingSenderId: "325277539536",
    appId: "1:325277539536:web:4fb224a69f9b240857d2d5",
    measurementId: "G-NM7CLM31NH",
    databaseURL: 'https://booking-my-default-rtdb.asia-southeast1.firebasedatabase.app/'
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getDatabase(app)

export {db}
