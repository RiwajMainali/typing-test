// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB6lwBplXoc_7ktR5GxRnel7Yersp71STs",
  authDomain: "typing-test-f6af3.firebaseapp.com",
  projectId: "typing-test-f6af3",
  storageBucket: "typing-test-f6af3.appspot.com",
  messagingSenderId: "128111860838",
  appId: "1:128111860838:web:4f6f19166dc7cc97be21a7",
  measurementId: "G-GNYEGWLRWK",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
