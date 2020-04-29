import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyAZSKHkv1EqagVIJ6BRcZgVpuZvVKUI--Y",
  authDomain: "crwn-db-f6075.firebaseapp.com",
  databaseURL: "https://crwn-db-f6075.firebaseio.com",
  projectId: "crwn-db-f6075",
  storageBucket: "crwn-db-f6075.appspot.com",
  messagingSenderId: "995097830198",
  appId: "1:995097830198:web:e9852122eac823937c8997",
  measurementId: "G-5K7GHZBQ6F",
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
