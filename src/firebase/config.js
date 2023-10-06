import { initializeApp } from "firebase/app";
import { initializeFirestore, serverTimestamp } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { getAuth } from "firebase/auth";


// Firebase config aqui embaixo
const firebaseConfig = {
  apiKey: "AIzaSyCz8-7Tm1W_AuEmVyMN4eDWe9kTjyq2CE4",
  authDomain: "getitdone-176d3.firebaseapp.com",
  projectId: "getitdone-176d3",
  storageBucket: "getitdone-176d3.appspot.com",
  messagingSenderId: "96341278393",
  appId: "1:96341278393:web:7b18ac44f929184181a568",
  measurementId: "G-KWZRCQE09L"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

// Initialize services
const db = initializeFirestore(firebaseApp, {
  ignoreUndefinedProperties: true,
});
const auth = getAuth(firebaseApp);
const storage = getStorage(firebaseApp);

// Timestamp
const timestamp = serverTimestamp();

export { db, auth, storage, timestamp };
