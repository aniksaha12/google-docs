
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';


const firebaseConfig = {
  apiKey: "AIzaSyBcNrOVTcOlZSL4Q8tJBcZP1I5lc7JEYco",
  authDomain: "docs-9de90.firebaseapp.com",
  projectId: "docs-9de90",
  storageBucket: "docs-9de90.appspot.com",
  messagingSenderId: "1057451136242",
  appId: "1:1057451136242:web:24e0a60116875ecf00ac6b",
  measurementId: "G-NF78RGCJTQ"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const firestore = getFirestore(app);
export const auth = getAuth(app);
