// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "rent-a-car-1e344.firebaseapp.com",
  projectId: "rent-a-car-1e344",
  storageBucket: "rent-a-car-1e344.appspot.com",
  messagingSenderId: "281221611167",
  appId: "1:281221611167:web:949813b58933957db6acaa"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);