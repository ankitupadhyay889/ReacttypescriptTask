import React from 'react';
import LoginGithub from 'react-login-github';

const Goog = () => {

    const onSuccess = response => console.log(response);
    const onFailure = response => console.error(response);

    return (
        <LoginGithub clientId="27988343c575c5c1d16e"
        onSuccess={onSuccess}
        onFailure={onFailure}/>
    );
};

export default Goog;