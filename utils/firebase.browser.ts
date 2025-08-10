import { initializeApp } from "firebase/app";

import { getFirestore, collection } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import {
  getAuth,
  GoogleAuthProvider,
  FacebookAuthProvider,
  signInWithEmailAndPassword,
  signInWithPopup,
} from "firebase/auth";

// interface

const clientCredentials = {
  apiKey: process.env.NEXT_PUBLIC_FIRABASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIRABASE_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_FIRABASE_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_FIRABASE_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_FIRABASE_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_FIRABASE_APP_ID,
};

const app = initializeApp(clientCredentials);
const auth = getAuth(app);
const db = getFirestore(app);
const storage = getStorage(app);

const usersCollection = collection(db, "users");

const googleProvider = new GoogleAuthProvider();
const facebookProvider = new FacebookAuthProvider();

export {
  app,
  db,
  storage,
  usersCollection,
  auth,
  googleProvider,
  facebookProvider,
  signInWithEmailAndPassword,
};
