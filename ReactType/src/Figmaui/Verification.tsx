import React from 'react';
import { Grid, Box, Button, Container, Typography } from '@material-ui/core';
import "./Verification.css";
import bannerveri from '../images/banerveri.png';
import logo from '../images/log.png';
import relod from '../images/reload.png';

const Verification = () => {
    return (
        <div>
            <Container className='ma'>
                <Grid container>
                    <Grid item lg={5} md={5} sm={12} xs={12} className="logo">
                        <img src={logo} alt="logo"/>
                        <Typography variant='h1'>Verification</Typography>
                        <Typography variant='h5'>Enter The OTP Sent To +919876543210</Typography>
                            <Box className='form'>
                                <input type="text" id="digit-1" name="digit-1" data-next="digit-2" />
                                <input type="text" id="digit-1" name="digit-1" data-next="digit-3" />
                                <input type="text" id="digit-1" name="digit-1" data-next="digit-4" />
                                <input type="text" id="digit-1" name="digit-1" data-next="digit-5" />
                            </Box>
                                <p className="second">Sec 08</p>
                                <Typography className="resend">
                                    <p>Resend OTP</p>
                                    <img src={relod} alt="reload"/>
                                </Typography>
                            <Button id='btn'>Verification</Button>
                    </Grid>
                    <Grid item lg={7} md={7} sm={12} xs={12} className="ban">
                        <img src={bannerveri} alt="banner"/>
                    </Grid>
                </Grid>
            </Container>
        </div>
    );
};

export default Verification;