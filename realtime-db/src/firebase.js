// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA4Du3He0Zc4ZTyQ540j73uTe3vFa4oRqo",
  authDomain: "realtime-db-9747a.firebaseapp.com",
  databaseURL: "https://realtime-db-9747a-default-rtdb.firebaseio.com",
  projectId: "realtime-db-9747a",
  storageBucket: "realtime-db-9747a.firebasestorage.app",
  messagingSenderId: "638375519654",
  appId: "1:638375519654:web:a2788472907b34348c5b67",
  measurementId: "G-8PSMEQ5XQD"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);