// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCsyZRDajeRJKLTf8Jw442_5mj6lQRSP6w",
  authDomain: "auth-and-private-route-a60eb.firebaseapp.com",
  projectId: "auth-and-private-route-a60eb",
  storageBucket: "auth-and-private-route-a60eb.appspot.com",
  messagingSenderId: "408436058085",
  appId: "1:408436058085:web:834fddb5b6b7d5577c710c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;