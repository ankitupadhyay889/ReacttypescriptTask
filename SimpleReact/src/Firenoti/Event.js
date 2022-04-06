import React, { useEffect } from 'react';
import firebase from './Firebaseinit';

const Event = () => {

    useEffect(() => {
      All()
    }, [])

    function All(){
        const messaging = firebase.messaging();
        messaging.onMessage((payload) => {
            console.log(payload);
        })
    }
    
    return (
        <div>
            
        </div>
    );
};

export default Event;