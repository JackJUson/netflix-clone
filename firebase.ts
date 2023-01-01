// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
import { getAuth } from 'firebase/auth'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDACwyg_0a0Sw5fowBCdq4jdvIwUwhSXj4",
  authDomain: "netflix-clone-ea5e4.firebaseapp.com",
  projectId: "netflix-clone-ea5e4",
  storageBucket: "netflix-clone-ea5e4.appspot.com",
  messagingSenderId: "493445840226",
  appId: "1:493445840226:web:279281c27f718c6694003b"
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp()
const db = getFirestore()
const auth = getAuth()

export default app
export { auth, db }