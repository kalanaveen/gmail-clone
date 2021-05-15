import firebase from "firebase";
const firebaseConfig = {
  apiKey: "AIzaSyA2hLhTr3Y3lWOigZdduT8dgPRR8aZASlw",
  authDomain: "clone-448f0.firebaseapp.com",
  projectId: "clone-448f0",
  storageBucket: "clone-448f0.appspot.com",
  messagingSenderId: "903171674312",
  appId: "1:903171674312:web:3ce19afeb1ba8d3c9595fd",
  measurementId: "G-5TQ923C88L"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { db, auth, provider };
