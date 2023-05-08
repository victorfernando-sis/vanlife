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

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_SENDER_ID,
  appId: process.env.REACT_APP_FIREBASE_APP_ID,
};

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
    const credential = GoogleAuthProvider.credentialFromResult(result);
    const token = credential.accessToken;
    const user = result.user;
    // return user
    // const redirectTo =
    //     new URL(window.location.href).searchParams.get("redirectTo") || "/host";
      return (window.location.href = '/host');
    // IdP data available using getAdditionalUserInfo(result)
  }).catch((error) => {
    // Handle Errors here.
    const errorCode = error.code;
    const errorMessage = error.message;
    // The email of the user's account used.
    const email = error.customData.email;
    // The AuthCredential type that was used.
    const credential = GoogleAuthProvider.credentialFromError(error);
    // ...
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
