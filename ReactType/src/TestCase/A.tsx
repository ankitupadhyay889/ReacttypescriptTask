import React, { useState } from 'react';

const A = () => {

    const [fadein, setfadein] = useState({
        fade: "fade-in"
    })

    return (
        <div data-testid="text">
            <h1>ankit</h1>
            <p className={fadein.fade}> upadhyay </p>
        </div>
    );
};

export default A;