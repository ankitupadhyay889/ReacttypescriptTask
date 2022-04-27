import { Box, Container } from '@mui/material';
import React from 'react';
import { useLocation } from 'react-router-dom';

const Hme = () => {

    const location = useLocation()
    const state = location.state as any

    return (
        <Container>
            <Box m={5} fontWeight={500} fontSize={50}> Here We Receive the Data of API </Box>
            <Box border={2} m={5} fontStyle="italic" color="primary.main" fontSize={25}> Titel:- {state?.title} </Box>
            <Box border={2} m={5} fontStyle="italic" color="primary.main" fontSize={25}> Author:- {state?.author} </Box>
            <Box border={2} m={5} fontStyle="italic" color="primary.main" fontSize={25}> Created_At:- {state?.created_at} </Box>
            <Box border={2} m={5} fontStyle="italic" color="primary.main" fontSize={25}> URL:- {state?.url} </Box>
        </Container>
    );
};

export default Hme;