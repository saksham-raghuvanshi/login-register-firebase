import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyDfASZ8dF1iOYtKgCyMK7lgGnDxL0W3jOg",
  authDomain: "login-register-firebase-9c74b.firebaseapp.com",
  projectId: "login-register-firebase-9c74b",
  storageBucket: "login-register-firebase-9c74b.appspot.com",
  messagingSenderId: "990036108529",
  appId: "1:990036108529:web:89590a9bdf7471d81c7550",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
