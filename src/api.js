import { initializeApp } from "firebase/app";
import { getFirestore, getDocs, getDoc, doc, collection,query, where } from "firebase/firestore/lite";

const firebaseConfig = {
  apiKey: "AIzaSyCnQs79YvZdHaptIW8heKrnp0SBX7sOTwI",
  authDomain: "vanlife-4f695.firebaseapp.com",
  projectId: "vanlife-4f695",
  storageBucket: "vanlife-4f695.appspot.com",
  messagingSenderId: "785669588592",
  appId: "1:785669588592:web:937f2defaeffcca11e96b5",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const vansCollectionRef = collection(db, 'vans')

export async function getVans() {
    const querySnapshot = await getDocs(vansCollectionRef)
    const dataArr = querySnapshot.docs.map(doc => ({
        ...doc.data(),
        id: doc.id
    }))
    return dataArr
}

export async function getVan(id) {
    const docRef = doc(db, "vans", id)
    const vanSnapshot = await getDoc(docRef)
    return {
        ...vanSnapshot.data(),
        id: vanSnapshot.id
    }
}

export async function getHostVans() {
    const q = query(vansCollectionRef, where("hostId", "==", "123"))
    const querySnapshot = await getDocs(q)
    const dataArr = querySnapshot.docs.map(doc => ({
        ...doc.data(),
        id: doc.id
    }))
    return dataArr
}

/* eslint-disable no-throw-literal */

export async function loginUser(creds) {
  const res = await fetch("/api/login", {
    method: "post",
    body: JSON.stringify(creds),
  });
  const data = await res.json();

  if (!res.ok) {
    throw {
      message: data.message,
      statusText: res.statusText,
      status: res.status,
    };
  }

  return data;
}
