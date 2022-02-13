// Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
import firebase from 'firebase/compat/app';
import 'firebase/compat/storage';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAp1J1djkuqQbkMP0SESpM-hno2IfqEt5g",
  authDomain: "fir-app-f6271.firebaseapp.com",
  projectId: "fir-app-f6271",
  storageBucket: "fir-app-f6271.appspot.com",
  messagingSenderId: "521373989051",
  appId: "1:521373989051:web:063c1a7fd8f5df12c1d19e"
};

// Initialize Firebase
// const app = initializeApp(firebaseConfig);
firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();

const firestore = firebase.firestore();
export const database ={
  users : firestore.collection('users')
}

export const storage = firebase.storage();

