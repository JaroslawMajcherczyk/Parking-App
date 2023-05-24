import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyA4wOE1CymlXIOHnUos7zs0cURl5BwOPeg",
  authDomain: "parking-app-982fd.firebaseapp.com",
  databaseURL: "https://parking-app-982fd-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "parking-app-982fd",
  storageBucket: "parking-app-982fd.appspot.com",
  messagingSenderId: "403807858129",
  appId: "1:403807858129:web:7e667839b0e4012da1c4f0",
  measurementId: "G-F4GT8N6NRY"
};


export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const db = getFirestore(app);

