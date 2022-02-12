// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase";
const firebaseConfig = firebase.initializeApp({
    apiKey: "AIzaSyA1aNDS_92Vc3Fdp51Q7wfZlKjWb-GkftU",
    authDomain: "instagram-clone-18e60.firebaseapp.com",
    projectId: "instagram-clone-18e60",
    storageBucket: "instagram-clone-18e60.appspot.com",
    messagingSenderId: "760477249667",
    appId: "1:760477249667:web:764a92347cc95b63792bb6",
    measurementId: "G-LNVRKVS72T"
  });
  const db =firebaseApp.firestore();
  const auth = firebase.auth();
  const storage = firebase.storage();
  export default {db,auth,storage};