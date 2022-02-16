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
    apiKey: "AIzaSyDm96iTNN_niqw4bVp5lpWQ5mt0qGKuoK4",
    authDomain: "reels-app-f059d.firebaseapp.com",
    projectId: "reels-app-f059d",
    storageBucket: "reels-app-f059d.appspot.com",
    messagingSenderId: "304778250335",
    appId: "1:304778250335:web:20176b73be386b259f33ea"
  };

// Initialize Firebase
// const app = initializeApp(firebaseConfig);
firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();

const firestore = firebase.firestore();
export const database ={
  users : firestore.collection('users'),
  posts : firestore.collection('posts'),
  getTimeStamp : firebase.firestore.FieldValue.serverTimestamp,
}

export const storage = firebase.storage();