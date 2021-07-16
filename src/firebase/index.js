import firebase from 'firebase/app';
import 'firebase/storage';

const firebaseConfig = {
    apiKey: "AIzaSyC3z51k4dB7Hdcqdv-QJOTPS61uStvPqyg",
    authDomain: "ecommerce-image-upload.firebaseapp.com",
    databaseURL: "gs://ecommerce-image-upload.appspot.com",
    projectId: "ecommerce-image-upload",
    storageBucket: "ecommerce-image-upload.appspot.com",
    messagingSenderId: "1017515604891",
    appId: "1:1017515604891:web:a9d196d17f387a31b0ff3e",
    measurementId: "G-08X6L2FS67"
}

firebase.initializeApp(firebaseConfig);

const storage = firebase.storage();
export { storage, firebase as default };