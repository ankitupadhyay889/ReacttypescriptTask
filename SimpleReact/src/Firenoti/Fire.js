import { initializeApp } from "firebase/app";
import { getMessaging, getToken} from "firebase/messaging";

const firebaseConfig = {
  apiKey: "AIzaSyBUJe9abStmnrPbLGKd9QD_Ec8Ndt_dfOo",
  authDomain: "onemoretype-5a143.firebaseapp.com",
  projectId: "onemoretype-5a143",
  storageBucket: "onemoretype-5a143.appspot.com",
  messagingSenderId: "831912416530",
  appId: "1:831912416530:web:0e1b700d2d9db3a8244fcb"
};

// Initialize Firebase
initializeApp(firebaseConfig);

const messaging = getMessaging();

//....

export const requestForToken = () => {
  return getToken(messaging, { vapidKey: "BJGyWUPOute3qolRAJqnUyIwbpPxexNEAh-9Z5MzyXvTiD1Hvy_YMeqa87_WFJXPXBJjppZowSmgPulrRvWbltM" })
    .then((currentToken) => {
      if (currentToken) {
        console.log('current token for client: ', currentToken);
        // Perform any other neccessary action with the token
      } else {
        // Show permission request UI
        console.log('No registration token available. Request permission to generate one.');
      }
    })
    .catch((err) => {
      console.log('An error occurred while retrieving token. ', err);
    });
};