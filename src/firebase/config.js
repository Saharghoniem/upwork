// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth,  } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBDVWyOdufIqfz8kFLn0qX62cM5Tg76_uc",
  authDomain: "sahar-ghonie.firebaseapp.com",
  projectId: "sahar-ghonie",
  storageBucket: "sahar-ghonie.appspot.com",
  messagingSenderId: "764669545687",
  appId: "1:764669545687:web:2f1eea4c470fbf8ea8b492"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);