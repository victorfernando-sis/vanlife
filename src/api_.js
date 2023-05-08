import { initializeApp } from "firebase/app";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import {
  getFirestore,
  getDocs,
  getDoc,
  doc,
  collection,
  query,
  where,
} from "firebase/firestore/lite";
import { getErrorMessage } from "./utils";
import { firebaseConfig } from "./config";

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
const db = getFirestore(app);
const vansCollectionRef = collection(db, "vans");

export async function getVans() {
  const querySnapshot = await getDocs(vansCollectionRef);
  const dataArr = querySnapshot.docs.map((doc) => ({
    ...doc.data(),
    id: doc.id,
  }));
  return dataArr;
}

export async function getVan(id) {
  const docRef = doc(db, "vans", id);
  const vanSnapshot = await getDoc(docRef);
  return {
    ...vanSnapshot.data(),
    id: vanSnapshot.id,
  };
}

export async function getHostVans() {
  const q = query(vansCollectionRef, where("hostId", "==", "123"));
  const querySnapshot = await getDocs(q);
  const dataArr = querySnapshot.docs.map((doc) => ({
    ...doc.data(),
    id: doc.id,
  }));
  return dataArr;
}

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
      return (window.location.href = '/host');
  }).catch((error) => {
    // Handle Errors here.
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
