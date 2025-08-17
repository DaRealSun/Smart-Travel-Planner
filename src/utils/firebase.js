// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBv1KEQT-c2iM5ZR9nIZ7-fwjStUXiQKdE",
    authDomain: "smart-travel-79cbd.firebaseapp.com",
    projectId: "smart-travel-79cbd",
    storageBucket: "smart-travel-79cbd.firebasestorage.app",
    messagingSenderId: "821914405286",
    appId: "1:821914405286:web:5278c88117f758d9532767",
    measurementId: "G-MP99KDSSK5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();
