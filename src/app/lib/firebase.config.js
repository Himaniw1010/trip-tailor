// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCQCszI-DyDPZHxVmLyZOX06aCGTCXWX9M",
  authDomain: "triptailor-9b621.firebaseapp.com",
  projectId: "triptailor-9b621",
  storageBucket: "triptailor-9b621.appspot.com",
  messagingSenderId: "491737126402",
  appId: "1:491737126402:web:04cbc6f370e6f81143f91b",
  measurementId: "G-DQQZXHYM7D"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
const db = getFirestore(app);
export default db;

// Initialize Realtime Database and get a reference to the service
// export const database = getDatabase(app);