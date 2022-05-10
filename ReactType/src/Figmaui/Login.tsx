import React from 'react';
import { Grid, Box, Button, Container, Typography } from '@material-ui/core';
import "./Login.css";
import banner from '../images/scooter.png';
import logo from '../images/log.png';
import flag from '../images/flag.png';
import phone from '../images/phone.png';

const Login = () => {

    return (
        <>
            <Container className='cona'>
                <Grid container>
                    <Grid className="logo" item lg={4} md={6} sm={12} xs={12}>
                        <img src={logo} alt="log"/>
                        <Typography variant='h1'>Welcome Back!</Typography>
                        <Typography variant='h5'>login account</Typography>
                        
                        <Box className='form'>
                            <Grid container>
                                <Grid className='flag' item xs={4} sm={3}>
                                <img className='flag-img' src={flag} alt="flag"/>
                                    <select> 
                                        <option> +91</option>
                                        <option> +92</option>
                                        <option> +93</option>
                                        <option> +94</option>
                                    </select>
                                </Grid>
                                <Grid className='input' item xs={8} sm={9}>
                                    <input className='inputfield' placeholder="Mobile no" />
                                    <img src={phone} alt="phone"/>
                                </Grid>
                            </Grid>
                        </Box>
                        <Grid><Button id='btn'>Get OTP</Button></Grid>
                    </Grid>
                    <Grid className="ban" item lg={8} md={6} sm={12} xs={12}>
                        <img src={banner} alt="ban"/>
                    </Grid>
                </Grid>
            </Container>
        </>
    );
}

export default Login;