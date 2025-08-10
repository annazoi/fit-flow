import { initializeApp } from "firebase/app";

import { getFirestore, collection } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const clientCredentials = {
  apiKey: process.env.FIRABASE_API_KEY,
  authDomain: process.env.FIRABASE_AUTH_DOMAIN,
  projectId: process.env.FIRABASE_PROJECT_ID,
  storageBucket: process.env.FIRABASE_STORAGE_BUCKET,
  messagingSenderId: process.env.FIRABASE_MESSAGING_SENDER_ID,
  appId: process.env.FIRABASE_APP_ID,
};

const app = initializeApp(clientCredentials);

const db = getFirestore(app);
const storage = getStorage(app);

const postsCollection = collection(db, "posts");
const commentsCollection = collection(db, "comments");
const usersCollection = collection(db, "users");

export {
  app,
  db,
  storage,
  postsCollection,
  commentsCollection,
  usersCollection,
};
