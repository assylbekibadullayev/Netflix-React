import { initializeApp, getApp, getApps } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
import { getAuth } from 'firebase/auth'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBIh__-9ONSjg-ALgOXXGqN42jqPTmhSUU",
    authDomain: "netflix-clone-yt-dd97d.firebaseapp.com",
    projectId: "netflix-clone-yt-dd97d",
    storageBucket: "netflix-clone-yt-dd97d.appspot.com",
    messagingSenderId: "914110345909",
    appId: "1:914110345909:web:9bfd67ddf7419f640504fc"
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp()
const db = getFirestore()
const auth = getAuth()

export default app
export { auth, db }
