import React from 'react';
import { Link } from 'react-router-dom';
import Rute from './Rute';

const Linkinf = () => {
    return (
        <>
            <nav>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                        <Link to="/data">Data</Link>
                    </li>
                </ul>
            </nav>
            <hr/>
            <Rute />
        </>
    );
};

export default Linkinf;