import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyCttYc8ilW2I94j6c_8HB7AxnRGj2Budg4",
  authDomain: "instagram-8a787.firebaseapp.com",
  projectId: "instagram-8a787",
  storageBucket: "instagram-8a787.appspot.com",
  messagingSenderId: "902278894819",
  appId: "1:902278894819:web:07b9be4b9787aea2f161d6",
  measurementId: "G-K2Q9SN1E96"
});

const db = firebaseApp.firestore();
const auth = firebaseApp.auth();
const storage = firebaseApp.storage();

export { db, auth, storage }
