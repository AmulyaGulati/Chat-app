/* eslint-disable no-undef */
import { initializeApp } from 'firebase/app';
import { getMessaging } from 'firebase/messaging';

const firebaseApp = initializeApp({
  apiKey: 'AIzaSyDYddupMWra5vmun6udJvtrH8k1FkgifA8',
  authDomain: 'chat-web-app-ebca8.firebaseapp.com',
  projectId: 'chat-web-app-ebca8',
  storageBucket: 'chat-web-app-ebca8.appspot.com',
  messagingSenderId: '978358535847',
  appId: '1:978358535847:web:29e6c0873726ad613e7d82',
  databaseURL: 'https://chat-web-app-ebca8-default-rtdb.firebaseio.com/',
});

getMessaging(firebaseApp);

export const isLocalhost = Boolean(
  window.location.hostname === 'localhost' ||
    // [::1] is the IPv6 localhost address.
    window.location.hostname === '[::1]' ||
    // 127.0.0.0/8 are considered localhost for IPv4.
    window.location.hostname.match(
      /^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/
    )
);
