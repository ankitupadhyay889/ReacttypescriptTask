import { Box, Container, Theme } from '@mui/material';
import { makeStyles } from '@mui/styles';

// const styl = makeStyles({
//     root:{
//         color: "red",
//         fontSize: "100px"
//     }
// })

const styl = makeStyles((theme : Theme) => ({
    root:{
        color: theme.palette.primary.main ,
        fontSize: "100px",
        boxShadow: theme.shadows[2]
    }
}))
// ye by default theme milta hai hume use krne k liye jo hum khud se de rehe hai wo theme se dedo.

const Five = () => {
    const cla = styl();
    return (
        <>
            <Container maxWidth="xs">
            <Box p={5}>
                <h1 className={cla.root}>Box</h1>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
                Numquam perspiciatis voluptatum consequuntur alias quo, corrupti ullam sed incidunt eveniet 
                praesentium ratione in repudiandae laboriosam. Nulla soluta doloremque ab id sunt?</p>
            </Box>
            </Container>
        </>
    );
};

export default Five;