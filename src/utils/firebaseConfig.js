import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore, collection } from "firebase/firestore";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: "react-auth-6788d.firebaseapp.com",
  projectId: "react-auth-6788d",
  storageBucket: "react-auth-6788d.appspot.com",
  messagingSenderId: "131797845021",
  appId: "1:131797845021:web:3f7ff4766e2b89ca5d32f4",
  measurementId: "G-VWPBR1NSLL",
};

const app = initializeApp(firebaseConfig);
const firebaseAuth = getAuth(app);
const firebaseDB = getFirestore(app);

const usersRef = collection(firebaseDB, "users");
const meetingsRef = collection(firebaseDB, "meetings");

export { firebaseAuth, firebaseDB, usersRef, meetingsRef };
