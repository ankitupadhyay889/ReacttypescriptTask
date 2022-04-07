import React, { useState } from 'react';
import {requestForToken} from "./firebase";
import { onMessageListener } from './firebase';

const Firecall = () => {

    const [notification, setNotification] = useState({title: '', body: ''});
    onMessageListener().then(payload => {
        setNotification({title: payload.notification.title, body: payload.notification.body})
        console.log(payload);
      }).catch(err => console.log('failed: ', err));

    requestForToken();

    return (
        <>
            <p> Push{notification} </p>
        </>
    );
};

export default Firecall;