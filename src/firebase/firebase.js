// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCcjZs0KndcEd7KDJ-SphbE30DQlnwuVOI",
  authDomain: "cars-project-35843.firebaseapp.com",
  projectId: "cars-project-35843",
  storageBucket: "cars-project-35843.appspot.com",
  messagingSenderId: "966396998115",
  appId: "1:966396998115:web:505adcd19ae02383c0f0d6",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
export default auth;
