// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBO6tToNOQBmwhd0zBcNhyip5KYEYM6FH0",
  authDomain: "attendceforms.firebaseapp.com",
  projectId: "attendceforms",
  storageBucket: "attendceforms.appspot.com",
  messagingSenderId: "4842107305",
  appId: "1:4842107305:web:a1b16c2eeaa724744b54b8",
  measurementId: "G-HLRH2LXNBJ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
export default  db
