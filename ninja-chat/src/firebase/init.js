import firebase from 'firebase'
import firestore from 'firebase/firestore'

// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyBgBoCcFFBuhENU6H6E3wL7mL_MwEv18is",
    authDomain: "udemy-ninja-chat-4f9cc.firebaseapp.com",
    databaseURL: "https://udemy-ninja-chat-4f9cc.firebaseio.com",
    projectId: "udemy-ninja-chat-4f9cc",
    storageBucket: "udemy-ninja-chat-4f9cc.appspot.com",
    messagingSenderId: "569521533748",
    appId: "1:569521533748:web:89cf36932c30dfcb73eb61"
};
// Initialize Firebase
const firebaseApp =  firebase.initializeApp(firebaseConfig);
firebaseApp.firestore().settings({ timestampsInSnapshots: true })

export default firebaseApp.firestore()