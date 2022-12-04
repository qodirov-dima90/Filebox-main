import firebase from 'firebase/compat/app'
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import 'firebase/compat/storage';

const app = firebase.initializeApp({
  apiKey: "AIzaSyCP77cMRrIJGXbGN8-mDzDlOI0xOHCc_p4",
  authDomain: "my-filebox.firebaseapp.com",
  projectId: "my-filebox",
  storageBucket: "my-filebox.appspot.com",
  messagingSenderId: "920644222294",
  appId: "1:920644222294:web:d9c2f9954920b4c7722af7"
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