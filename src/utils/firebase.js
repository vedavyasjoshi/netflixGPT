// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCcOAtKJrSzcR33c5nurmc-aT5QtM2HTTg",
  authDomain: "netflixgpt-ed358.firebaseapp.com",
  projectId: "netflixgpt-ed358",
  storageBucket: "netflixgpt-ed358.appspot.com",
  messagingSenderId: "293643265217",
  appId: "1:293643265217:web:00b8ea78e1d2ec738aa040",
  measurementId: "G-1W8LJBFZ3D",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();
