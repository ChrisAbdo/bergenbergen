import firebase from 'firebase'

const firebaseConfig = {
      apiKey: "AIzaSyBaf0nEUaDp47BxHkbqqA48OYODiIuiKiw",
      authDomain: "slack-clone-b8127.firebaseapp.com",
      projectId: "slack-clone-b8127",
      storageBucket: "slack-clone-b8127.appspot.com",
      messagingSenderId: "142628634926",
      appId: "1:142628634926:web:dbbaf6a52a00a595933abf",
      measurementId: "G-P8NWHSM6BR"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider()

export {auth, provider}
export default db;