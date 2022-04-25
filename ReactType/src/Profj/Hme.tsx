import React from 'react';
import { useLocation } from 'react-router-dom';

const Hme = () => {

    const location = useLocation()
    const state = location.state as any

    return (
        <div>
            <h1>Home</h1>
            <p> {state?.author} </p>
        </div>
    );
};

export default Hme;