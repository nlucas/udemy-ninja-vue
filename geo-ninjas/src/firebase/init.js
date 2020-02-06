import firebase from 'firebase'
import firestore from 'firebase/firestore'

// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyCcdLpMQgCy2F1peU2sX-j2oBmkHZc03ek",
    authDomain: "geo-ninjas-2b16b.firebaseapp.com",
    databaseURL: "https://geo-ninjas-2b16b.firebaseio.com",
    projectId: "geo-ninjas-2b16b",
    storageBucket: "geo-ninjas-2b16b.appspot.com",
    messagingSenderId: "201379378693",
    appId: "1:201379378693:web:1ce51f8d88dbb266600e6c"
};
// Initialize Firebase
let firebaseApp = firebase.initializeApp(firebaseConfig);

export default firebaseApp.firestore()