// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCdgha1AdfXksOAsl9DAr3vg2xHzMGAti8",
  authDomain: "netflixgpt-c5baa.firebaseapp.com",
  projectId: "netflixgpt-c5baa",
  storageBucket: "netflixgpt-c5baa.firebasestorage.app",
  messagingSenderId: "1083692794164",
  appId: "1:1083692794164:web:5d02b353269a527fb5a561",
  measurementId: "G-9NW278TNB6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();