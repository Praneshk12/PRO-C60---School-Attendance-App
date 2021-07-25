import firebase from 'firebase';

var firebaseConfig = {
  apiKey: 'AIzaSyAUNjlnr_OayXHlijNKhtX-Xpn1WoPVq7A',
  authDomain: 'class-room1.firebaseapp.com',
  databaseURL: 'https://class-room1-default-rtdb.firebaseio.com',
  projectId: 'class-room1',
  storageBucket: 'class-room1.appspot.com',
  messagingSenderId: '107967544063',
  appId: '1:107967544063:web:5e35663b544647beed2aca',
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase.database();
