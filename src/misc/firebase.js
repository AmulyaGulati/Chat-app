import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';

const config = {
  apiKey: 'AIzaSyDYddupMWra5vmun6udJvtrH8k1FkgifA8',
  authDomain: 'chat-web-app-ebca8.firebaseapp.com',
  projectId: 'chat-web-app-ebca8',
  storageBucket: 'chat-web-app-ebca8.appspot.com',
  messagingSenderId: '978358535847',
  appId: '1:978358535847:web:29e6c0873726ad613e7d82',
  databaseURL: 'https://chat-web-app-ebca8-default-rtdb.firebaseio.com/',
};

const app = firebase.initializeApp(config);
export const auth = app.auth();
export const database = app.database();
