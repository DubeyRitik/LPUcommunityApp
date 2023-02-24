import firebase from "firebase/compat/app";
import "firebase/compat/firestore";

import { getFirestore } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyDrQw1MK7U7S7nuQBvC9Jrsk5w1y22ET6M",
  authDomain: "test3-e9073.firebaseapp.com",
  projectId: "test3-e9073",
  storageBucket: "test3-e9073.appspot.com",
  messagingSenderId: "1021243008450",
  appId: "1:1021243008450:web:41a6496ccc7eec7c4f625b",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
export { db };
