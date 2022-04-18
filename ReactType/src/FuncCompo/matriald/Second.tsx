import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import DeleteIcon from '@mui/icons-material/Delete';
import SendIcon from '@mui/icons-material/Send';
import Stack from '@mui/material/Stack';
import { Box } from '@mui/material';

const Input = styled('input')({
    display: 'none',
});  

const Second = () => {
    return (
        <>
            <div>
                <label htmlFor="contained-button-file">
                <Input accept="image/*" id="contained-button-file" multiple type="file" />
                <Button variant="contained" component="span">Upload</Button>
                </label>
            </div>
            <br/><br/>
            <Stack direction="row" spacing={2}>
                <Button variant="outlined" startIcon={<DeleteIcon />}>Delete</Button>
                <Button variant="contained" endIcon={<SendIcon />}>Send</Button>
                
            </Stack>
            <Button href="https://google.com" color='primary' variant='outlined' size="medium" >Link</Button>

            <h3>Custom Button</h3>
            <Button href="https://google.com" variant='contained' color='primary' style={{
                backgroundColor:"pink"
            }} >Link</Button>
            
            <h3>Box</h3>
            <Box textAlign="left" fontWeight="Bold">Hello</Box>
            <Box textAlign="right" fontWeight={500}>Hello</Box>
            <Box textAlign="center" fontSize={50}>Hello</Box>
            <Box textAlign="center" fontSize={70} fontStyle="italic">Hello</Box>

            <h3>Margin</h3>
            {/* mt , mr , ml , mb or jb hum 2 likhte hai toh means 16px toh 10 = 160px */}
            <Box m={10}>Allsidemargin</Box> 
            <Box mx={10}>MarginLeftRight</Box>
            <Box my={10}>MargiTopBootom</Box>

            <h3>Padding</h3>
            {/* bas jha m hai wha bas p lga do */}
            <Box p={10}>AllsidePadding</Box>

            <Box width="50%" bgcolor="red">Width</Box>
            <Box width={500} bgcolor="blue">Width</Box>
            {/* same for height */}

            <Box border={1} borderRadius="50%" width={300} height={300}>Help</Box>
      </>
    );
};

export default Second;