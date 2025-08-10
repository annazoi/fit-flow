import { signInWithPopup } from "firebase/auth";
import {
  auth,
  googleProvider,
  facebookProvider,
  signInWithEmailAndPassword,
} from "./firebase.browser";

const signInWithGoogle = async () => {
  try {
    const result = await signInWithPopup(auth, googleProvider);
    const user = result.user;
    console.log("User:", user);
  } catch (error) {
    console.error(error);
  }
};

const signInWithFacebook = async () => {
  try {
    const result = await signInWithPopup(auth, facebookProvider);
    const user = result.user;
    console.log("User:", user);
  } catch (error) {
    console.error(error);
  }
};

const getLoggedUser = () => {
  return auth.currentUser;
};

const logoutUser = () => {
  auth.signOut().then(() => {});
};

export { signInWithGoogle, signInWithFacebook, getLoggedUser, logoutUser };
