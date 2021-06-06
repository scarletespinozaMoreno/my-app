import app from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'
const firebaseConfig={
    apiKey: "AIzaSyBEiGPEfE9PFTzRbfQjWhP_KzpcRM3tXG0",
    authDomain: "basehosteria.firebaseapp.com",
    projectId: "basehosteria",
    storageBucket: "basehosteria.appspot.com",
    messagingSenderId: "710580182831",
    appId: "1:710580182831:web:ba9ee8f61554622c1d4bda"
}
//inicializar
app.initializeApp(firebaseConfig);

const db = app.firestore();
const auth = app.auth();

export {auth, db}