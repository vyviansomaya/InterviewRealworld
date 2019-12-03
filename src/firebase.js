
import firebase from 'firebase/app';
import "firebase/auth";
import "firebase/database";
import "firebase/storage";

var firebaseConfig = {
    apiKey: "AIzaSyAIesho5m9onfki_rV_bUP0ejtn_-fZUfY",
    authDomain: "react-slack-clone-95bd1.firebaseapp.com",
    databaseURL: "https://react-slack-clone-95bd1.firebaseio.com",
    projectId: "react-slack-clone-95bd1",
    storageBucket: "react-slack-clone-95bd1.appspot.com",
    messagingSenderId: "580844129287",
    appId: "1:580844129287:web:33b04d50e42bd9d2372ea2",
    measurementId: "G-9DVCZBG9DY"
};
  // Initialize Firebase
firebase.initializeApp(firebaseConfig);

  
export default firebase;

