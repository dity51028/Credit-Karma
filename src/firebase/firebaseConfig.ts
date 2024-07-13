// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCD0ovObPTipJeleCPjrtn3oQNc7_9zIz4",
  authDomain: "credit-karma-b91ec.firebaseapp.com",
  projectId: "credit-karma-b91ec",
  storageBucket: "credit-karma-b91ec.appspot.com",
  messagingSenderId: "886686858750",
  appId: "1:886686858750:web:3665bae2c87a44640d14af",
  measurementId: "G-K22K780N75",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
