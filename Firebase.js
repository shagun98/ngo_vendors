// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCThgL7Of8UsnPrCh53mFGKGGVPSdyA8Zo",
  authDomain: "ngo-vendors.firebaseapp.com",
  projectId: "ngo-vendors",
  storageBucket: "ngo-vendors.firebasestorage.app",
  messagingSenderId: "691724276912",
  appId: "1:691724276912:web:014a4812361315ef969775",
  measurementId: "G-2WZYDYNPHY"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);
export const db = getFirestore(app);
