// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "@firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyArHwVV0MA3ne5NV4AFFWibOhSjh7BRAuU",
  authDomain: "chatapp-1-bf712.firebaseapp.com",
  projectId: "chatapp-1-bf712",
  storageBucket: "chatapp-1-bf712.appspot.com",
  messagingSenderId: "102887441796",
  appId: "1:102887441796:web:867bf6d57ca96e49cc49d1"
  
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();