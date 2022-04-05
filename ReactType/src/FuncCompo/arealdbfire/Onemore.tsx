import React, { useState } from "react";
import {db} from "./firebase";
import {collection, addDoc} from "firebase/firestore";

const Onemore = () => {
const [Name, setNam] = useState("");
const [Password, setPassw] = useState("");

const subm = async(e: any) => {
    e.preventDefault();
    await addDoc(collection(db , "information"),{
        name: Name,
        password: Password
    });
    setNam("");
    setPassw("");
}

return (
	<div>
		<input type="text" placeholder="Name" value={Name} onChange={(e) => setNam(e.target.value)}/>
		<input type="text" placeholder="Password" value={Password} onChange={(e) => setPassw(e.target.value)}/>
		<button onClick={subm}>Submit</button>
	</div>
);
}
export default Onemore;