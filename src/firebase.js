import firebase from "firebase/app";

const firebaseConfig = {

  databaseURL: "https://hostel-booking-9415c.firebaseio.com",
  apiKey: "AIzaSyC7rc5AvP6_obAwYMGWEXJ0wVSIj3ojo-s",
  authDomain: "hostel-booking-9415c.firebaseapp.com",
  projectId: "hostel-booking-9415c",
  storageBucket: "hostel-booking-9415c.appspot.com",
  messagingSenderId: "352644717519",
  appId: "1:352644717519:web:7ccb8bd78c7ddf140610ba",
  measurementId: "G-TN3L081S1Y"
};
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const google = new firebase.auth.GoogleAuthProvider().providerId;
const fb = new firebase.auth.FacebookAuthProvider().providerId;
export { auth, google, firebaseApp, fb };
export default db;