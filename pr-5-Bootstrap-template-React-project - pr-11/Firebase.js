// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyCLrywQC7JMBcYVDfT_5g8ckGDpUrYMaIM",
  authDomain: "pr-11-bootstrap-template.firebaseapp.com",
  databaseURL: "https://pr-11-bootstrap-template-default-rtdb.firebaseio.com",
  projectId: "pr-11-bootstrap-template",
  storageBucket: "pr-11-bootstrap-template.firebasestorage.app",
  messagingSenderId: "643275821495",
  appId: "1:643275821495:web:930cbbac2dc90407159832",
  measurementId: "G-69GCEDL93N"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);