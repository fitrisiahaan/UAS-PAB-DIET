import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import "firebase/compat/database";

firebase.initializeApp({
  apiKey: "AIzaSyD_E6CS-VhNK0QOTbdLVlLglkmMOJS150s",
  authDomain: "modul-9-fitri.firebaseapp.com",
  databaseURL: "https://modul-9-fitri-default-rtdb.firebaseio.com",
  projectId: "modul-9-fitri",
  storageBucket: "modul-9-fitri.appspot.com",
  messagingSenderId: "63672325502",
  appId: "1:63672325502:web:3d8bfd34a99be5e1ee4f2f",
});

const FIREBASE = firebase;

export default FIREBASE;
