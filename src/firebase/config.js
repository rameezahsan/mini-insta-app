import * as firebase from 'firebase/app';
import 'firebase/storage'; //to store our images
import 'firebase/firestore'; //its the database

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: 'AIzaSyDUsnLfmaPtSz0E9-DINMYwIY14G7LF3fw',
  authDomain: 'firegram-456.firebaseapp.com',
  databaseURL: 'https://firegram-456.firebaseio.com',
  projectId: 'firegram-456',
  storageBucket: 'firegram-456.appspot.com',
  messagingSenderId: '706893462217',
  appId: '1:706893462217:web:927e60bba6e73ef3d4ab18',
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const projectStorage = firebase.storage();
const projectFirestore = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { projectFirestore, projectStorage, timestamp };
