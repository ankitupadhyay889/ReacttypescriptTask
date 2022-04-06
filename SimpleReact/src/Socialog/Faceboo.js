import React from 'react';
import FacebookLogin from "react-facebook-login";

const Faceboo = () => {

    const resPon = (response) => {
        console.log("login result" , response);
    }

    const okClic = (data) => {
        console.log(data);
    }

    return (
        <div>
            <h1> React Social Login </h1>
            <FacebookLogin 
            appId='391847875818275'
            autoLoad={true}
            fields="name,email,picture"
            onClick={okClic}
            callback={resPon} />
        </div>
    );
};

export default Faceboo;

// 467508364445-cpao00pk47tabkojlt5q2sbcrn23r8bb.apps.googleusercontent.com  clientid
// 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  clientscrescct