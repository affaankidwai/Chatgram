// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import {getAuth} from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDDlygjdKI_eWG1n8ZvuJU2YGfqIW5GVLQ",
  authDomain: "chatgram-68526.firebaseapp.com",
  projectId: "chatgram-68526",
  storageBucket: "chatgram-68526.appspot.com",
  messagingSenderId: "494495087611",
  appId: "1:494495087611:web:d9c9bd01c3bc2fb47a695e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)