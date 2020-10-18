import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDfdUCPFW6JOJWE5Y1K1vBoviXl6DBmPEg",
  authDomain: "discord-clone-fa125.firebaseapp.com",
  databaseURL: "https://discord-clone-fa125.firebaseio.com",
  projectId: "discord-clone-fa125",
  storageBucket: "discord-clone-fa125.appspot.com",
  messagingSenderId: "670278194580",
  appId: "1:670278194580:web:977b347a4676e55ba1ab81",
  measurementId: "G-KE934106ZB",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
