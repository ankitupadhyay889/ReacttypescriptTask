import React, { useState } from 'react';
import { Card,CardContent,Typography,Button,Grid, Container } from "@mui/material";

const Random = () => {

    const [randomname, setrandomname] = useState<any>("")

    const temp = async() => {
        const apko = await fetch(`https://api.nasa.gov/neo/rest/v1/neo/browse?api_key=nrXcddvYDsxddIwWKJSHF1FGtdDY5qgOsPTIJiyB`)
        const weath = await apko.json();
        console.log(weath);
        // setrandomname(weath.near_earth_objects[0+2].name)
        let dgd = weath.near_earth_objects;
        let h = dgd[Math.floor(Math.random() * dgd.length)]
        setrandomname(h);
    }

    return (
        <Container>
            <Grid spacing={2} p={2} container alignContent="center">
                <Grid item sm={12} xs={12} lg={12} md={12}>
                    <Card sx={{ minWidth: 275 }}>
                        <CardContent>
                        <Button onClick={temp} type="button" variant="outlined"> Random Asteroid </Button>
                        <Typography variant="h5" component="div">Name: {randomname.name} </Typography>
                        <Typography variant="h5" component="div">Nasa_jpl_URL: {randomname.nasa_jpl_url} </Typography>
                        <Typography variant="h5" component="div">Hazardous_Asteroid: {randomname.absolute_magnitude_h} </Typography>
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>
        </Container>
    );
};
export default Random;