// Import the functions you need from the SDKs you need
import { getAnalytics } from "firebase/analytics";
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC05ZC9aUoAZwwZN3khkr3raKKeQecTc8E",
  authDomain: "manifestation-2b8a1.firebaseapp.com",
  projectId: "manifestation-2b8a1",
  storageBucket: "manifestation-2b8a1.firebasestorage.app",
  messagingSenderId: "939410052840",
  appId: "1:939410052840:web:06cbba8baf577254ac5b5d",
  measurementId: "G-CLVSS4R66B"
};

// Initialize Firebase
export const FIREBASE_APP = initializeApp(firebaseConfig);
export const FIREBASE_ANALYTICS = getAnalytics(FIREBASE_APP);
export const FIREBASE_AUTH = getAuth(FIREBASE_APP);
export const FIREBASE_DB = getFirestore(FIREBASE_APP);
export const FIREBASE_STORAGE = getStorage(FIREBASE_APP);