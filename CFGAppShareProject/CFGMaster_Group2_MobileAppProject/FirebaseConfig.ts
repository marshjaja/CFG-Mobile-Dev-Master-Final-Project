// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBG54r1IMAcrbAdHjU8BR_otxstaWVMF-8",
  authDomain: "try-and-try-again.firebaseapp.com",
  projectId: "try-and-try-again",
  storageBucket: "try-and-try-again.appspot.com",
  messagingSenderId: "558373771220",
  appId: "1:558373771220:web:04b97e0154a2bab177a841",
};

// Initialize Firebase
export const FIREBASE_APP = initializeApp(firebaseConfig);
export const FIREBASE_AUTH = getAuth(FIREBASE_APP);
