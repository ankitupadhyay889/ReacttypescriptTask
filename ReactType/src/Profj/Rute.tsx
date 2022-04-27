import React from 'react';
import { Routes , Route } from 'react-router-dom';
import Apical from './Apical';
import Hme from './Hme';

const Rute = () => {
    return (
        <>
            <Routes>
                <Route path="/" element={<Apical />} />
                <Route path='/data' element={<Hme />} />
            </Routes>  
        </>
    );
};

export default Rute;