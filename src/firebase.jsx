import firebase from 'firebase'
// Import necessary functions from Firebase SDK

// Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBGxGSr-WUt_cdqYfY7R7iy1RNri8FogbA",
  authDomain: "driveclone-45cc6.firebaseapp.com",
  projectId: "driveclone-45cc6",
  storageBucket: "driveclone-45cc6.firebasestorage.app", 
  messagingSenderId: "447418060751",
  appId: "1:447418060751:web:8b6dda3bf75d453cd84cba",
  measurementId: "G-4F85R9BC0J"
};

// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);

// Initialize services
const db = firebaseApp.firestore()
const storage = firebase.storage()
const auth = firebase.auth()
const provider = new firebase.auth.GoogleAuthProvider();

export { db, storage, auth, provider };
