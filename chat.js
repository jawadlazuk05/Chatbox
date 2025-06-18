// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCDENCFRpnDA9d-PrVFhp25RZ7366DSGl4",
  authDomain: "chatjs-fced9.firebaseapp.com",
  projectId: "chatjs-fced9",
  storageBucket: "chatjs-fced9.firebasestorage.app",
  messagingSenderId: "134039046335",
  appId: "1:134039046335:web:8698e325a7f039d8ed5e0a",
  measurementId: "G-WY7ZJE6SCR"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);