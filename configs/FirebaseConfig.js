// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: "testproject-a0e1d.firebaseapp.com",
  projectId: "testproject-a0e1d",
  storageBucket: "testproject-a0e1d.firebasestorage.app",
  messagingSenderId: "42501377159",
  appId: "1:42501377159:web:8c7bbee367556f795f3c22",
  measurementId: "G-5NBVX9TEH0",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
