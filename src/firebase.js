import firebase from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyA-1yjN-SZOBOaL1RR_TYZoqRJcxqAnk-0",
  authDomain: "hostelbooking-14dde.firebaseapp.com",
  databaseURL: "https://hostelbooking-14dde.firebaseio.com",
  projectId: "hostelbooking-14dde",
  storageBucket: "hostelbooking-14dde.appspot.com",
  messagingSenderId: "740993244488",
  appId: "1:740993244488:web:90095b285b497c7edee77d",
  measurementId: "G-2XL8LNEX4E"
};
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const google = new firebase.auth.GoogleAuthProvider().providerId;
const fb = new firebase.auth.FacebookAuthProvider().providerId;
export { auth, google, firebaseApp, fb };
export default db;