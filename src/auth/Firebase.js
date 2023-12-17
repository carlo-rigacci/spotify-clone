// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth ,GoogleAuthProvider } from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBzZkAVVmVzxKvza-9Zf767Zw4MDJiYYfE",
  authDomain: "spotify-clone-a28d3.firebaseapp.com",
  projectId: "spotify-clone-a28d3",
  storageBucket: "spotify-clone-a28d3.appspot.com",
  messagingSenderId: "180220106712",
  appId: "1:180220106712:web:cdd0053ca56d71789d44ad",
  measurementId: "G-HQJ7MBQPEY"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();