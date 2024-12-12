import { initializeApp } from "firebase/app";

import { GoogleAuthProvider, getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBPVFLgs1Y8UKGG30-tJfLjxTqqvzeSvQo",
  authDomain: "pr-11-firebase.firebaseapp.com",
  databaseURL: "https://pr-11-firebase-default-rtdb.firebaseio.com",
  projectId: "pr-11-firebase",
  storageBucket: "pr-11-firebase.firebasestorage.app",
  messagingSenderId: "766603374231",
  appId: "1:766603374231:web:cf59c24e7f0f1bbe95c3d2",
  measurementId: "G-2YDVEVWFBP"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);


export const auth = getAuth();
export const googleAuthProvider = new GoogleAuthProvider()
export default app;