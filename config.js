import * as firebase from 'firebase';
require ('@firebase/firestore')

var firebaseConfig = {
    apiKey: "AIzaSyB1o7mogcZFC8ocq3OCEEyv5lgYaHQMVgA",
    authDomain: "storyhub-11d57.firebaseapp.com",
    projectId: "storyhub-11d57",
    storageBucket: "storyhub-11d57.appspot.com",
    messagingSenderId: "1068546674224",
    appId: "1:1068546674224:web:a183192958f31ac534e7f5"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export default firebase.firestore()