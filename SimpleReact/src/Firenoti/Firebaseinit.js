import {initializeApp} from "firebase/app";
import Cons from "./Cons";

const firebase = initializeApp(Cons.firebaseConfig)
export default firebase;