import React from 'react';
import firebase from './Firebaseinit';

const Firecall = () => {

    const login = () => {
        const messaging = firebase.messaging()
        messaging.requestPermission().then(() => {
            return messaging.getToken()
        }).then(token => {
            console.log("Token is : ",token );
        }).catch(() => {
            console.log("error in code.");
        })
    }    

    return (
        <div>
            <button onClick={login}> TokenGen </button>
        </div>
    );
};

export default Firecall;