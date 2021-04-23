import * as firebase from 'firebase/app';
import 'firebase/storage';
import 'firebase/firestore';

var firebaseConfig = {
  apiKey: "AIzaSyA5vdbjEYoweAHz3F3hfaqrWgTzIpA07MA",
  authDomain: "kittygramm-a1a36.firebaseapp.com",
  projectId: "kittygramm-a1a36",
  storageBucket: "kittygramm-a1a36.appspot.com",
  messagingSenderId: "521961858020",
  appId: "1:521961858020:web:4d7e7cff96146595b81df1",
  measurementId: "G-E0VRP40XXQ"
};


// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const projectStorage = firebase.storage();
const projectFirestore = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { projectStorage, projectFirestore, timestamp };