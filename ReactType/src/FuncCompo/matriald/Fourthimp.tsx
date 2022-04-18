import { Container, Box, Grid, Hidden, Paper } from '@mui/material';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const Fourthimp = () => {
    return (
        <>
        {/* column bhi likh skte ho */}
            <Grid container spacing={2} direction="row">
                <Grid item sm={6} xs={12} lg={3} md={4}>
                    <Box bgcolor="yellow" p={5}>1</Box>
                </Grid>
                <Grid item sm={6} xs={12} lg={3} md={4}>
                    <Box bgcolor="green" p={5}>2</Box>
                </Grid>
                <Grid item sm={6} xs={12} lg={3} md={4}>
                    <Box bgcolor="blue" p={5}>3</Box>
                </Grid>
                <Hidden only="md">
                <Grid item sm={6} xs={12} lg={3} md={4}>
                    <Box bgcolor="red" p={5}>4</Box>
                </Grid>
                </Hidden>
            </Grid>
            <br/><br/>
            <Grid container spacing={2} direction="row" justifyContent="center">
                <Grid item sm={6} xs={12} lg={3} md={4}>
                    <Box bgcolor="yellow" p={5}>1</Box>
                </Grid>
                <Grid item sm={6} xs={12} lg={3} md={4}>
                    <Box bgcolor="green" p={5}>2</Box>
                </Grid>
                <Grid item sm={6} xs={12} lg={3} md={4}>
                    <Box bgcolor="blue" p={5}>3</Box>
                </Grid>
            </Grid>
            <br/><br/>
            <br/><br/>
            <Grid container spacing={2} direction="row" justifyContent="center">
                <Grid item sm={6} xs={12} lg={3} md={4}>
                    <Box bgcolor="yellow" p={5}>
                    <Grid container spacing={2} direction="row" justifyContent="center">
                        <Grid item xs={4}>
                            <Box bgcolor="pink" p={5}>1-1</Box>
                        </Grid>
                        <Grid item xs={4}>
                            <Box bgcolor="green" p={5}>1-2</Box>
                        </Grid>
                        <Grid item xs={4}>
                            <Box bgcolor="blue" p={5}>1-3</Box>
                        </Grid>
                    </Grid>
                    </Box>
                </Grid>
                <Grid item sm={6} xs={12} lg={3} md={4}>
                    <Box bgcolor="green" p={5}>2</Box>
                </Grid>
                <Grid item sm={6} xs={12} lg={3} md={4}>
                    <Box bgcolor="blue" p={5}>3</Box>
                </Grid>
            </Grid>
            <br/><br/>
            <Grid container spacing={2} direction="row">
                <Grid item sm={6} xs={12} lg={3} md={4}>
                    <Paper>
                    <Box bgcolor="yellow" p={5}>1</Box>
                    </Paper>
                </Grid>
                <Grid item sm={6} xs={12} lg={3} md={4}>
                    <Paper elevation={0}>
                    <Box bgcolor="green" p={5}>2</Box>
                    </Paper>
                </Grid>
                <Grid item sm={6} xs={12} lg={3} md={4}>
                    <Paper elevation={9}>
                    <Box bgcolor="blue" p={5}>3</Box>
                    </Paper>
                </Grid>
                <Grid item sm={6} xs={12} lg={3} md={4}>
                    <Paper variant="outlined">
                    <Box bgcolor="red" p={5}>4</Box>
                    </Paper>
                </Grid>
            </Grid>
            <br/><br/>
            <Grid container spacing={2} direction="row">
                <Grid item sm={6} xs={12} lg={3} md={4}>
                  <Card sx={{ minWidth: 275 }}>
                    <CardContent>
                        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>Word of the Day</Typography>
                        <Typography variant="h5" component="div">MaterialU</Typography>
                    </CardContent>
                    <CardActions>
                        <Button size="small">Learn More</Button>
                    </CardActions>
                    </Card>
                </Grid>
                <Grid item sm={6} xs={12} lg={3} md={4}>
                    <Box bgcolor="green" p={5}>2</Box>
                </Grid>
                <Grid item sm={6} xs={12} lg={3} md={4}>
                    <Box bgcolor="blue" p={5}>3</Box>
                </Grid>
                <Grid item sm={6} xs={12} lg={3} md={4}>
                    <Box bgcolor="red" p={5}>4</Box>
                </Grid>
            </Grid>
            <br/><br/>
            <h3>Container</h3>
            {/* sm, lg, md and fixed */}
            <Container maxWidth="sm">
                <Box sx={{ bgcolor: '#cfe8fc', height: '100vh' }} />
            </Container>
        </>
    );
};

export default Fourthimp;