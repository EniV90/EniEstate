// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "eni-estate.firebaseapp.com",
  projectId: "eni-estate",
  storageBucket: "eni-estate.appspot.com",
  messagingSenderId: "1082389946965",
  appId: "1:1082389946965:web:d6d6cb9923a255a779aadc"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);