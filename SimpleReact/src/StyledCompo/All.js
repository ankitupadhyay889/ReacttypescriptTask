import React from 'react';
import styled from 'styled-components';
import "../App.css";
import StyledButton from '../StyledCompo/Buuton';
import Input from '../StyledCompo/Inpuuut';
import Foot from '../Styling/Foot';
import Navv from "../Styling/Navv";

const Call = () => {

    const Button = styled.button`
    color: green;
    font-size: 1em;
    margin: 1em;
    padding: 0.25em 1em;
    border: 2px solid palevioletred;
    border-radius: 3px;
    `;

    // A new component based on Button, but with some override styles
    const TomatoButton = styled(Button)`
    color: blue;
    border-color: tomato;
    `;

    return (
        <div>
            <Navv/>
            <div className='App'>
            <br/><br/><br/><br/><br/><br/>
            <StyledButton>StyledButton</StyledButton>
            <TomatoButton>Button</TomatoButton>
            <Button>Bu</Button>
            <Input type="text" inputColor="red"placeholder='Name' />
            </div>
            <Foot/>
        </div>
    );
};

export default Call;