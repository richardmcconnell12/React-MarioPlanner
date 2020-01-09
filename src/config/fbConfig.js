import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

// intialize firebase
var firebaseConfig = {
  apiKey: "AIzaSyCPo8TBDuwg90VDUCEPJfq4GkGO1zwLNg8",
  authDomain: "marioplanner-9cbe9.firebaseapp.com",
  databaseURL: "https://marioplanner-9cbe9.firebaseio.com",
  projectId: "marioplanner-9cbe9",
  storageBucket: "marioplanner-9cbe9.appspot.com",
  messagingSenderId: "95267275803",
  appId: "1:95267275803:web:a6f505d26f5f9a58d124be",
  measurementId: "G-D5KQGVRS6Q"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.firestore().settings({ timestampsInSnapshots: true });

export default firebase;
