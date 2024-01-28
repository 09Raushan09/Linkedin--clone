// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from 'firebase/firestore';
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC9RKYTlrJvwX7dOkrLXcIYlmuLL79mCXs",
  authDomain: "linkedin-clone-ea13f.firebaseapp.com",
  projectId: "linkedin-clone-ea13f",
  storageBucket: "linkedin-clone-ea13f.appspot.com",
  messagingSenderId: "494333295315",
  appId: "1:494333295315:web:d1e53a1b3c90178538f226"
};

// Initialize Firebase

// const app = initializeApp(firebaseConfig);
// const auth = getAuth(app);
// const firestore = getFirestore(app);

// export { auth, app, firestore };
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const firestore = getFirestore(app);
const storage = getStorage(app);

export { auth, app, firestore, storage };