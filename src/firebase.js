import firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyC13feWgrolRc8diT9be1_GHU75vxzryV4",
  authDomain: "imessage-clone-bbf71.firebaseapp.com",
  projectId: "imessage-clone-bbf71",
  storageBucket: "imessage-clone-bbf71.appspot.com",
  messagingSenderId: "580070738698",
  appId: "1:580070738698:web:9af3db00276fae628308f3",
  measurementId: "G-BFZPQJRSYD",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
