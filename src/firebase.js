import firebase from 'firebase/compat/app'
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import 'firebase/compat/storage';

const app = firebase.initializeApp({
  apiKey: "AIzaSyC7W8Oo8MW-tESDvCceNK6jPpi5-mO9e10",
  authDomain: "filebox-9a14b.firebaseapp.com",
  projectId: "filebox-9a14b",
  storageBucket: "filebox-9a14b.appspot.com",
  messagingSenderId: "414619200118",
  appId: "1:414619200118:web:92f6fb3861fea483350d57",
  measurementId: "G-4TMPF302M6"
});
export const auth = app.auth();
export const firestore = app.firestore();
export const database = {
  folders: firestore.collection('folders'),
  files: firestore.collection('files'),
  formatDoc: doc => {
    return {
      id: doc.id,
      ...doc.data()
    }
  },
  getCurrentTimestamp: firebase.firestore.FieldValue.serverTimestamp
}

export const storage = app.storage();
export default app;