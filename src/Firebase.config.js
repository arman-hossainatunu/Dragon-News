// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDTTcv8PubA1X2Oz2-w-0ZIkovspPyFiJk",
  authDomain: "elated-capsule-404019.firebaseapp.com",
  projectId: "elated-capsule-404019",
  storageBucket: "elated-capsule-404019.firebasestorage.app",
  messagingSenderId: "334157449684",
  appId: "1:334157449684:web:27223a51aae0f4194fae41",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
