// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBoLdcdsQ5JVnn059Jf8g8-TEfymcSNWEw",
  authDomain: "photostat-145e8.firebaseapp.com",
  projectId: "photostat-145e8",
  storageBucket: "photostat-145e8.appspot.com",
  messagingSenderId: "127281273459",
  appId: "1:127281273459:web:6fb3754876f53ae1b52806"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app