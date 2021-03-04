import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyAghA0M0XI3Luc5kzPyvaIyH4sIiMpGvms",
  authDomain: "legalmate-13e46.firebaseapp.com",
  projectId: "legalmate-13e46",
  storageBucket: "legalmate-13e46.appspot.com",
  messagingSenderId: "996305908378",
  appId: "1:996305908378:web:daff1c412e1f3edee7a523",
  measurementId: "G-17NGPKDREJ"
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
} else {
  firebase.app(); // if already initialized, use that one
}
export default firebase;