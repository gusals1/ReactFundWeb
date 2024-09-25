// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCiqlurIpOh0j-RPq194Q0oXHk94OWBcLQ",
  authDomain: "myfundingapp.firebaseapp.com",
  projectId: "myfundingapp",
  storageBucket: "myfundingapp.appspot.com",
  messagingSenderId: "743309343044",
  appId: "1:743309343044:web:47b302ce373383c34b7f11",
  measurementId: "G-8M4G9FT81F",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
// export const db = getFirestore(app)
