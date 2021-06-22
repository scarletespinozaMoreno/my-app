import app from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'
import 'firebase/storage'


const firebaseConfig={
    apiKey: "AIzaSyAdUEfnAG4sMYl5bN-iYwWRW7M07fBf2hk",
    authDomain: "hosteria-95a60.firebaseapp.com",
    databaseURL: "https://hosteria-95a60-default-rtdb.firebaseio.com",
    projectId: "hosteria-95a60",
    storageBucket: "hosteria-95a60.appspot.com",
    messagingSenderId: "542004704893",
    appId: "1:542004704893:web:e58870315ae52c054c6314",
    measurementId: "G-80DEZ5YFN2"
}
//inicializar
app.initializeApp(firebaseConfig);

const db = app.firestore()
const auth = app.auth()
const storage = app.storage()
export {auth, db,storage}