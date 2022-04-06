import app from "../src/Fire/Firebase";

importScripts('https://www.gstatic.com/firebasejs/8.2.3/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/8.2.3/firebase-messaging.js');

app.initializeApp({
  messagingSenderId: "831912416530"
})

const initMessaging = app.messaging();