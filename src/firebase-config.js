// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseApiKey = import.meta.env.FIREBASE_API ; 

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: firebaseApiKey,
  authDomain: "smartindia-893ad.firebaseapp.com",
  projectId: "smartindia-893ad",
  storageBucket: "smartindia-893ad.firebasestorage.app",
  messagingSenderId: "895757884867",
  appId: "1:895757884867:web:1d003809a04080d58e3176"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore();