import React from 'react';
import Faceboo from "./Socialog/Faceboo";
import Goog from './Socialog/Goog';
import Githu from "./Socialog/Githu";

const Social = () => {
    return (
        <div>
            <Faceboo />
            <br /><br />
            <Goog />
            <br /><br />
            <Githu />
        </div>
    );
};

export default Social;