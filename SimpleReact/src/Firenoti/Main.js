import React from 'react';
import {getMessaging} from "firebase/messaging";

const Main = () => {

    const messaging = getMessaging();
    messaging.requestPermission().then(() => {
        return messaging.getToken()
    }).then(token => {
        console.log("Token is : ",token );
    }).catch(() => {
        console.log("error in code.");
    })

    return (
        <div>
            
        </div>
    );
};

export default Main;