import React, { useState } from 'react';
import { Card,CardContent,Typography,ImageList,ImageListItem,TextField,Button,Grid, Container } from "@mui/material";

const Main = () => {

    const [countryDeta, setcountryDeta] = useState("")
    const [show, setshow] = useState("");
    const [capital, setcapital] = useState("");
    const [latlng, setlat] = useState("");
    const [Flag, setFlag] = useState("");

    const submit = async() => {
        let countryName = countryDeta
        const res = await fetch(`https://restcountries.com/v3.1/name/${countryName}`)
        const data = await res.json()
        console.log(data)
        setshow(data[0].name.common)
        setcapital(data[0].capital)
        setlat(data[0].latlng)
        setFlag(data[0].flags.png)
        setcountryDeta("")
    }

//! ********************************************Call Weather******************************************************************************** 

    const [weatherdata, setweatherdata] = useState("")
    const [icon, seticon] = useState("")
    const [speed, setspeed] = useState("")
    const [precip, setprecip] = useState("")

    const temp = async() => {
        let capitaltemp = capital
        const apko = await fetch(`http://api.weatherstack.com/current?access_key=98ab71fd8f03b3e20b650f08abd8fde5&query=${capitaltemp}`)
        const weath = await apko.json();
        console.log(weath);
        setweatherdata(weath.current.temperature)
        seticon(weath.current.weather_icons)
        setspeed(weath.current.wind_speed)
        setprecip(weath.current.precip)
    }

    return (
        <>
        <Container>
            <Grid spacing={2} p={2} container alignContent="center">
                <Grid item sm={12} xs={12} lg={12} md={12}>
                <TextField type="text" id="standard-basic" label="Enter Country Name"
                variant="outlined" name="name" autoComplete="off" value={countryDeta} onChange={(e) => setcountryDeta(e.target.value)} required />
                <br/><br/>
                <Button onClick={submit} type="submit" variant="outlined"> Submit </Button>
                    <Card sx={{ minWidth: 275 }}>
                        <CardContent>
                            <Typography variant="h5" sx={{ fontSize: 30 }} color="text.secondary" gutterBottom>CountryName: {show} </Typography>
                            <Typography variant="h5" component="div">Capital of Country: {capital} </Typography>
                            <Typography sx={{ mb: 1.5 }} color="text.secondary">Latitude Longitude: {latlng} </Typography>
                            <ImageList sx={{ml:55, width: 500, height: 250 }} rowHeight={200}>
                            <ImageListItem> <img src={Flag} alt="imaghi" loading="lazy"/></ImageListItem>
                            </ImageList>

                            
                            <Button onClick={temp} type="button" variant="outlined"> Capital Weather </Button>
                            <Typography variant="h5" component="div">
                                Temprature: {weatherdata} &deg;C
                                <ImageListItem> <img src={icon} alt="imaghi" loading="lazy"/></ImageListItem>
                            </Typography>
                            <Typography variant="h5" component="div">Wind_Speed: {speed} km/h </Typography>
                            <Typography variant="h5" component="div">Precip: {precip} </Typography>
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>
        </Container>
        </>
    );
};
export default Main;