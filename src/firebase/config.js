import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";
import "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyCqUQGh7bbrwzhlZgaxOTEm7aPI2vIUMaw",
  authDomain: "blogit-37bad.firebaseapp.com",
  projectId: "blogit-37bad",
  storageBucket: "blogit-37bad.appspot.com",
  messagingSenderId: "67242775670",
  appId: "1:67242775670:web:6eafa09394ef12f3263b57",
};

// init firebase
firebase.initializeApp(firebaseConfig);

// init services
const projectFirestore = firebase.firestore();
const projectAuth = firebase.auth();
const projectStorage = firebase.storage();

// timestamp
const timestamp = firebase.firestore.Timestamp;

export { projectFirestore, projectAuth, timestamp, projectStorage };
