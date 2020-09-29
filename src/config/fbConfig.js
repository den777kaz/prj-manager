import firebase from "firebase/app";
// import 'firebase/storage';
import 'firebase/firestore';
import 'firebase/auth';

// Your web app's Firebase configuration
const fbConfig = {
    apiKey: "AIzaSyAIp16J4Ths1q7zvhZKWVhHlBFAyWEYdXI",
    authDomain: "project-manager-cc9bf.firebaseapp.com",
    databaseURL: "https://project-manager-cc9bf.firebaseio.com",
    projectId: "project-manager-cc9bf",
    storageBucket: "project-manager-cc9bf.appspot.com",
    messagingSenderId: "185944103367",
    appId: "1:185944103367:web:87cf24e478b0a294ca21e2"
};
// Initialize Firebase
firebase.initializeApp(fbConfig);

export const projectFirestore = firebase.firestore();
export const projectAuth = firebase.auth();
