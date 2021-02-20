import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyBIscr0hOoVb_SqgGAYpKOFWyP-GMrTLdo",
  authDomain: "instagram-clone-f715d.firebaseapp.com",
  databaseURL: "https://instagram-clone-f715d-default-rtdb.firebaseio.com",
  projectId: "instagram-clone-f715d",
  storageBucket: "instagram-clone-f715d.appspot.com",
  messagingSenderId: "229054902138",
  appId: "1:229054902138:web:3560efbe6a3f39f893b0c3",
  measurementId: "G-CR9P9SGF22",
});

const db = firebaseApp.firestore();
const auth = firebase.auth();
const storage = firebase.storage();

export { db, auth, storage };
// export default db;
