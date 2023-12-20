// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyCQV7p_GUJWEEoq4-rx1zBduFv9PK4E5JY",
  authDomain: "tastelink-64ad7.firebaseapp.com",
  projectId: "tastelink-64ad7",
  storageBucket: "tastelink-64ad7.appspot.com",
  messagingSenderId: "501349191008",
  appId: "1:501349191008:web:91a6688d91fdd0d8dae205",
  measurementId: "G-G46Y6H8F0K"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

export const db = getFirestore(app);