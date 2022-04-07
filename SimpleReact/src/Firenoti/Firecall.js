import React, { useState } from 'react';
import { getToken } from "firebase/messaging";

const Firecall = () => {

    const [isTokenFound, setTokenFound] = useState(false);
    getToken(setTokenFound);

    return (
        <>
        {isTokenFound && "Found" }{!isTokenFound && "NotFound" }
        </>
    );
};

export default Firecall;