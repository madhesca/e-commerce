import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyAUHPW7s92pTYmoc-e9YmScfX5LfojkkRs",
  authDomain: "e-commerce-4d80b.firebaseapp.com",
  databaseURL: "https://e-commerce-4d80b.firebaseio.com",
  projectId: "e-commerce-4d80b",
  storageBucket: "e-commerce-4d80b.appspot.com",
  messagingSenderId: "920585465487",
  appId: "1:920585465487:web:19e7fa55f1105e3abb4afa",
  measurementId: "G-R5J356L0M6"
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);
  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      });
    } catch (error) {
      console.log("error creating user", error.message);
    }
  }

  return userRef;
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
