import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyBdm_i95ecsV77RgqNgpaL7QMm3sxtpcok",
    authDomain: "slack-825be.firebaseapp.com",
    databaseURL: "https://slack-825be.firebaseio.com",
    projectId: "slack-825be",
    storageBucket: "slack-825be.appspot.com",
    messagingSenderId: "957254367140",
    appId: "1:957254367140:web:775700b0d1a68312e5f331"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;


