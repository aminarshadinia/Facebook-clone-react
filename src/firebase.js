import "firebase/auth"
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';


const firebaseConfig = {
  apiKey: "AIzaSyDeMJ85hWRTa5bJk_Upd3tC9jwaVHgCO7Y",
  authDomain: "facebook-clone-e734f.firebaseapp.com",
  projectId: "facebook-clone-e734f",
  storageBucket: "facebook-clone-e734f.appspot.com",
  messagingSenderId: "786003096347",
  appId: "1:786003096347:web:2e101e78d91073042f19be",
  measurementId: "G-QNL41GTDVX"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();


export { auth, provider };
export default db;