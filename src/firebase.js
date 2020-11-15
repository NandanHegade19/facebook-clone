import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyBRZYxO9ojXBnJg1F32cECOXHNuQDaMrVE",
    authDomain: "facebook-clone-b3e7c.firebaseapp.com",
    databaseURL: "https://facebook-clone-b3e7c.firebaseio.com",
    projectId: "facebook-clone-b3e7c",
    storageBucket: "facebook-clone-b3e7c.appspot.com",
    messagingSenderId: "369633128062",
    appId: "1:369633128062:web:9b5669d1e0d298c1fbb22f"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig)

const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export {auth, provider, storage};

export default db;