import React from 'react';
import Faceboo from "./Socialog/Faceboo";
import Goog from './Socialog/Goog';
import Githu from "./Socialog/Githu";

const Social = () => {
    return (
        <div>
            <Faceboo />
            <br />
            <Goog />
            <br />
            <Githu />
        </div>
    );
};

export default Social;