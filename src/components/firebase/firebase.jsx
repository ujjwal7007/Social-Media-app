import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth, onAuthStateChanged } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBtR7mJGUggRmW1Azr0WwBBovB8VUNnOSo",
  authDomain: "media-ec387.firebaseapp.com",
  projectId: "media-ec387",
  storageBucket: "media-ec387.appspot.com",
  messagingSenderId: "714287296039",
  appId: "1:714287296039:web:b80d32cf188897f5f4a802",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db, onAuthStateChanged };
