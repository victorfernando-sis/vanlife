import { initializeApp } from "firebase/app";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import { getErrorMessage } from "../utils";
import { firebaseConfig } from "../config";

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
/* eslint-disable no-throw-literal */

export async function createNewUser(creds) {
  if (creds.password !== creds.confirmPassword) {
    throw { message: getErrorMessage("auth/different-password") };
  }
  await createUserWithEmailAndPassword(auth, creds.email, creds.password)
    .then((userCredential) => {
      // Signed in
      const user = userCredential.user;
      console.log("user", user);
      return user;
    })
    .catch((error) => {
      const errorCode = error.code;
      throw { message: getErrorMessage(errorCode) };
    });
}
export async function signinUser(creds) {
  return signInWithEmailAndPassword(auth, creds.email, creds.password)
    .then((userCredential) => {
      // Signed in
      const user = userCredential.user;
      return user;
    })
    .catch((error) => {
      const errorCode = error.code;
      throw { message: getErrorMessage(errorCode) };
    });
}

export async function signinWithGoogle(creds) {
  const provider = new GoogleAuthProvider();

  signInWithPopup(auth, provider)
    .then((result) => {
      return (window.location.href = "/host");
    })
    .catch((error) => {
      throw new Error(error);
    });
}

export async function logout() {
  signOut(auth)
    .then(() => {
      // Sign-out successful.
    })
    .catch((error) => {
      const errorCode = error.code;
      throw { message: getErrorMessage(errorCode) };
    });
}
