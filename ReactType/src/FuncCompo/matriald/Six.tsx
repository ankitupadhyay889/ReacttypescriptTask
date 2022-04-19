import {Grid , Box , Container} from "@mui/material";

const Six = () => {
    return (
        <>
        <Container>
            <Grid container spacing={2} p={2}>
                <Grid item sm={6} xs={12} lg={3} md={4}>
                    <Box bgcolor="yellow" p={5}>1</Box>
                </Grid>
                <Grid item sm={6} xs={12} lg={3} md={4}>
                    <Box bgcolor="green" p={5}>2</Box>
                </Grid>
                <Grid item sm={6} xs={12} lg={3} md={4}>
                    <Box bgcolor="blue" p={5}>3</Box>
                </Grid>
                <Grid item sm={6} xs={12} lg={3} md={4}>
                    <Box bgcolor="pink" p={5}>3</Box>
                </Grid>
            </Grid>
        </Container>
        </>
    );
};

export default Six;