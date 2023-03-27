// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore, collection, addDoc } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
   apiKey: "AIzaSyD7nckLFgYikY65VwDQjBmVvTeLW1ecGqI",
  authDomain: "midtermdashboard.firebaseapp.com",
  projectId: "midtermdashboard",
  storageBucket: "midtermdashboard.appspot.com",
  messagingSenderId: "818487967270",
  appId: "1:818487967270:web:ca0d982029ba82bad1b0e7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db }