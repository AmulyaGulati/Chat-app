import { Notification as Toast } from 'rsuite';
import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';
import 'firebase/storage';
import 'firebase/messaging';
import 'firebase/functions';
import { isLocalhost } from './helpers';

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
export const storage = app.storage();
export const functions = app.functions('europe-west3');

export const messaging = firebase.messaging.isSupported()
  ? app.messaging()
  : null;

if (messaging) {
  messaging.usePublicVapidKey(
    'BLs_I-HQyrAuUJJh8H3U0vtHGhVhXLMqoVoomeNL90GMKm0-o7sSoN9CJYRiBAVz-Yi7ZAni8mKateJfDwodTnw'
  );

  messaging.onMessage(({ notification }) => {
    const { title, body } = notification;
    Toast.info({ title, description: body, duration: 0 });
  });
}

if (isLocalhost) {
  functions.useFunctionsEmulator('http://localhost:3000');
}
