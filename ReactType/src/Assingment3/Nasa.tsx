import React, { useState } from 'react';
import { Card,CardContent,Typography,TextField,Button,Grid, Container } from "@mui/material";
import Random from './Random';

const Nasa = () => {

    const [nasaid, setnasaid] = useState("")
    const [name, setname] = useState("");
    const [nasa_jpl_url, setnasa_jpl_url] = useState("");
    const [is_potentially_hazardous_asteroid, setis_potentially_hazardous_asteroid] = useState("");

    const submit = async() => {
        let nasa = nasaid
        const res = await fetch(`https://api.nasa.gov/neo/rest/v1/neo/${nasa}?api_key=nrXcddvYDsxddIwWKJSHF1FGtdDY5qgOsPTIJiyB`)
        const data = await res.json()
        console.log(data)
        setname(data.name)
        setnasa_jpl_url(data.nasa_jpl_url)
        setis_potentially_hazardous_asteroid(data.absolute_magnitude_h)
        setnasaid("")
    }
    return (
        <>
            <Container>
                <Grid spacing={2} p={2} container alignContent="center">
                    <Grid item sm={12} xs={12} lg={12} md={12}>
                    <TextField type="text" id="standard-basic" label="Enter Asteroid ID"
                    variant="outlined" name="name" autoComplete="off" value={nasaid} onChange={(e) => setnasaid(e.target.value)} required />
                    <br/><br/>
                    <Button onClick={submit} type="submit" variant="outlined"> Submit </Button>
                        <Card sx={{ minWidth: 275 }}>
                            <CardContent>
                                <Typography variant="h5" sx={{ fontSize: 30 }} color="text.secondary" gutterBottom>AstoridName: {name} </Typography>
                                <Typography variant="h5" component="div">Nasa URL: {nasa_jpl_url} </Typography>
                                <Typography>HazardousAsteroid: {is_potentially_hazardous_asteroid} </Typography>
                                <Random />
                            </CardContent>
                        </Card>
                    </Grid>
                </Grid>
            </Container>
        </>
    );
};
export default Nasa;