import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCHMf-mo3WxSIbO1F84dy80nyBdKFD7Zys",
  authDomain: "clone-72f50.firebaseapp.com",
  projectId: "clone-72f50",
  storageBucket: "clone-72f50.appspot.com",
  messagingSenderId: "810823835778",
  appId: "1:810823835778:web:235a005b0e8e4651b6d49b",
  measurementId: "G-KHP84686NV",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { db, auth, provider };
