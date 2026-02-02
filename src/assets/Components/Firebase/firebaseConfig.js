// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDOUh17TxSy_WpM3YH48AxobuBNR-YEVjc",
  authDomain: "eccomerce-full-website.firebaseapp.com",
  projectId: "eccomerce-full-website",
  storageBucket: "eccomerce-full-website.firebasestorage.app",
  messagingSenderId: "992951794219",
  appId: "1:992951794219:web:acfba1df6d2774af56c86e",
  measurementId: "G-6GTT3SK303"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);