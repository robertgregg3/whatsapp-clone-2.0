import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyC2PegXgba7vs3BNto5lqqbEtU932VrGjw",
  authDomain: "whatsapp-clone-2-rob.firebaseapp.com",
  projectId: "whatsapp-clone-2-rob",
  storageBucket: "whatsapp-clone-2-rob.appspot.com",
  messagingSenderId: "942718015398",
  appId: "1:942718015398:web:6d1f4532912f0bb686e167",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
