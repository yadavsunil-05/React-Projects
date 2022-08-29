import firebase from "firebase/compat/app"
import "firebase/compat/auth"
import "firebase/compat/storage"
import "firebase/compat/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyBUmwzQeV2OA4cxcUH2FP8EvBs3kXldJR0",
  authDomain: "fir-ea4d3.firebaseapp.com",
  projectId: "fir-ea4d3",
  storageBucket: "fir-ea4d3.appspot.com",
  messagingSenderId: "634893149430",
  appId: "1:634893149430:web:2825f0d83fbffeaad538d7"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const auth = firebase.auth()

export { auth }