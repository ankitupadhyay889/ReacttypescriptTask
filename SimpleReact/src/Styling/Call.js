import React from 'react';
import "../App.css";
import StyledButton from '../StyledCompo/Buuton';
import Foot from './Foot';
import Navv from "./Navv";

const Call = () => {
    return (
        <div>
            <Navv/>
            <div className='App'>
            <br/><br/><br/><br/><br/><br/>
            <StyledButton>StyledButton</StyledButton>
            </div>
            <Foot/>
        </div>
    );
};

export default Call;