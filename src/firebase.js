import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';


// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBerN0dDuKpXBFC-Imk-041_0Pn2Ly53Eg",
    authDomain: "cart-8ddfd.firebaseapp.com",
    projectId: "cart-8ddfd",
    storageBucket: "cart-8ddfd.appspot.com",
    messagingSenderId: "125428808485",
    appId: "1:125428808485:web:e1bcb562b7307f06c938cc"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
// const auth = firebase.auth();
// const provider = new firebase.auth.GoogleAuthProvider();


// export { auth, provider };
export default db;