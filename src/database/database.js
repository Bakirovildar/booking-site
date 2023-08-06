import { initializeApp } from "firebase/app";
import { getDatabase, ref, push, off, query, limitToLast, get } from "firebase/database";

const firebaseConfig = {
    apiKey: "AIzaSyC7IjGNObI6MwdqfvbBQEQnWLIBPK0sOeY",
    authDomain: "ildar-aliya.firebaseapp.com",
    projectId: "ildar-aliya",
    storageBucket: "ildar-aliya.appspot.com",
    messagingSenderId: "381148474151",
    appId: "1:381148474151:web:ab7e388d60b8276cba5702",
    measurementId: "G-1V2HEJLRXJ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getDatabase(app)

export const createForm = (pathData, body) => push(ref(db, pathData), body)

export {db}
