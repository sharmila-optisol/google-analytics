import {getAuth} from 'firebase/auth'
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyAz0myEPAq_HDra6NxlowtsrR5vLZbzUko",
  authDomain: "analytics-e4185.firebaseapp.com",
  projectId: "analytics-e4185",
  storageBucket: "analytics-e4185.appspot.com",
  messagingSenderId: "779837987076",
  appId: "1:779837987076:web:f0c8fbe3a56b4a02bb5851",
  measurementId: "G-GPVE67STPY"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth= getAuth();
export default app;