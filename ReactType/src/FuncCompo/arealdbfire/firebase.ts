import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBUJe9abStmnrPbLGKd9QD_Ec8Ndt_dfOo",
  authDomain: "onemoretype-5a143.firebaseapp.com",
  projectId: "onemoretype-5a143",
  storageBucket: "onemoretype-5a143.appspot.com",
  messagingSenderId: "831912416530",
  appId: "1:831912416530:web:0e1b700d2d9db3a8244fcb"
};

//!  Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export {db};