import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'
const firebaseConfig={
    apiKey: "AIzaSyA9jSfCg4swRBK_E0r04k2sjiOImPNdtaw",
    authDomain: "fir-web-eec50.firebaseapp.com",
    projectId: "fir-web-eec50",
    storageBucket: "fir-web-eec50.appspot.com",
    messagingSenderId: "490536593367",
    appId: "1:490536593367:web:d8bfb4e97562ca1aa58d92",
    measurementId: "G-WG5HFTYRS4"
}
//inicializar
firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();
const auth = firebase.auth();

export {auth, db}