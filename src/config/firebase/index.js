// Import the functions you need from the SDKs you need
import firebase from "firebase/app";
// import 'firebase/auth';
// import 'firebase/firestore';

import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBNAicN34ZhSIRf4LOZE6oVmUp9Dj8UuOU",
  authDomain: "simple-notes-firebase-cce2d.firebaseapp.com",
  projectId: "simple-notes-firebase-cce2d",
  storageBucket: "simple-notes-firebase-cce2d.appspot.com",
  messagingSenderId: "1065076999264",
  appId: "1:1065076999264:web:637f988e2549e7e4b82f05",
  measurementId: "G-QZFWT1SL8M"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export default firebaseConfig;