import React from 'react';
import {requestForToken} from "./firebase";

const Firecall = () => {

    requestForToken();

    return (
        <>
            <p> Push </p>
        </>
    );
};

export default Firecall;