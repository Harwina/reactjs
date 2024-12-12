
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyAjxeCwdyoOhKx3jQQPlJeEM7RkJSp7UB8",
  authDomain: "react-firestore-8d4ba.firebaseapp.com",
  databaseURL: "https://react-firestore-8d4ba-default-rtdb.firebaseio.com",
  projectId: "react-firestore-8d4ba",
  storageBucket: "react-firestore-8d4ba.firebasestorage.app",
  messagingSenderId: "796038078972",
  appId: "1:796038078972:web:38e60dd8a34a9b402d5279",
  measurementId: "G-B8GXVTKYZH"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);