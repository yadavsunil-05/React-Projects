import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyDXEyAAun1DWdZ4pEX-UP18FCt4uy7Ntbc",
  authDomain: "insta-clone-6f057.firebaseapp.com",
  databaseURL: "https://insta-clone-6f057-default-rtdb.firebaseio.com",
  projectId: "insta-clone-6f057",
  storageBucket: "insta-clone-6f057.appspot.com",
  messagingSenderId: "919763762739",
  appId: "1:919763762739:web:ad945a880414ff5ebc2d46",
  measurementId: "G-7XJBHFF80V"
};


const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore()
const auth = firebase.auth();
const storage = getStorage(firebaseApp)

export { db, auth, storage }