import {initializeApp} from "firebase/app";
import Cons from "./firebase";

const firebase = initializeApp(Cons.firebaseConfig)
export default firebase;