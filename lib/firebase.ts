import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";



const firebaseConfig = {
  apiKey: "AIzaSyCa7rOLIgYG7TF0Cd-ThzBuD9gGdu1NoR4",
  authDomain: "post-up-931e2.firebaseapp.com",
  projectId: "post-up-931e2",
  storageBucket: "post-up-931e2.appspot.com",
  messagingSenderId: "1017931658667",
  appId: "1:1017931658667:web:3813aed54b01784d224eee",
  measurementId: "G-VTPBRMNDQN"
};


export const app = initializeApp(firebaseConfig);
export const db = getFirestore();
export const auth = getAuth();
export const storage = getStorage();