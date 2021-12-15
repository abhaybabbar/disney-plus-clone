import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import "firebase/compat/storage";

const firebaseConfig = {
  apiKey: "AIzaSyAAjbHPQPpRZQgqUpQNlGp9sqCz7NdkNHA",
  authDomain: "hotstar-clone-64552.firebaseapp.com",
  projectId: "hotstar-clone-64552",
  storageBucket: "hotstar-clone-64552.appspot.com",
  messagingSenderId: "676322279657",
  appId: "1:676322279657:web:b58debbc48f3396d187078",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export { auth, provider, storage };
export default db;
