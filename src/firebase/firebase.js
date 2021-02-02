import firebase from 'firebase'

const firebaseConfig = {
  apiKey: "AIzaSyAFU2E8IktOjKp4X6TAU1cSFfIJZhlMenk",
  authDomain: "note-app-bde2e.firebaseapp.com",
  databaseURL: "https://note-app-bde2e-default-rtdb.firebaseio.com",
  projectId: "note-app-bde2e",
  storageBucket: "note-app-bde2e.appspot.com",
  messagingSenderId: "97707138887",
  appId: "1:97707138887:web:978908f0b76798b3237662",
  measurementId: "G-WB2GCHMDHM"
}
// Initialize Firebase
firebase.initializeApp(firebaseConfig)

const database = firebase.database()
const googleAuthProvider = new firebase.auth.GoogleAuthProvider()

export { firebase, googleAuthProvider, database as default }