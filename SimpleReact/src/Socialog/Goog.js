import React from 'react';
import GoogleLogin from "react-google-login";

const Goog = () => {

    const responseGoogle = (response) => {
        console.log(response);
    }

    return (
            <GoogleLogin 
            clientId="467508364445-cpao00pk47tabkojlt5q2sbcrn23r8bb.apps.googleusercontent.com"
            buttonText="Login"
            onSuccess={responseGoogle}
            onFailure={responseGoogle}
            cookiePolicy={"single_host_origin"}
            isSignedIn={true}/>
    );
};

export default Goog;