import firebase from 'firebase'
import firestore from 'firebase/firestore'

var firebaseConfig = {
    apiKey: "AIzaSyClv8vLBXSqmSbxRU_SDcm3eksAvSaVogI",
    authDomain: "udemy-ninja-smoothies-d2983.firebaseapp.com",
    databaseURL: "https://udemy-ninja-smoothies-d2983.firebaseio.com",
    projectId: "udemy-ninja-smoothies-d2983",
    storageBucket: "udemy-ninja-smoothies-d2983.appspot.com",
    messagingSenderId: "554738557693",
    appId: "1:554738557693:web:8d43010eb16863ba3d9494",
    measurementId: "G-6BFPEBYP9J"
};
// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);
firebaseApp.firestore().settings({ timestampsInSnapshots:true})

// export firestore database
export default firebaseApp.firestore()