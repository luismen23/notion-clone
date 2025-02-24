import { initializeApp, getApps, getApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDXASgnmDneq_m7oAz05ELzBsXNSgdkqEU",
  authDomain: "notion-clone-lm.firebaseapp.com",
  projectId: "notion-clone-lm",
  storageBucket: "notion-clone-lm.firebasestorage.app",
  messagingSenderId: "68768244078",
  appId: "1:68768244078:web:ca0643e15447ff37f5a17f"
};

// Initialize Firebase
const app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApp()
// const app = initializeApp(firebaseConfig)
const db = getFirestore(app)

export {db}