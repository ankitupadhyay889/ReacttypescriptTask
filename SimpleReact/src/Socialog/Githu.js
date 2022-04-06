import React from 'react';
import GitHubLogin from "react-github-login";

const Goog = () => {

    const responseGoogle = (response) => {
        console.log(response);
    }

    return (
            <GitHubLogin 
            clientId="27988343c575c5c1d16e "
            onSuccess={responseGoogle}/>
    );
};

export default Goog;