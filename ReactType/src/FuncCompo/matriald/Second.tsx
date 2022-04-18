import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import DeleteIcon from '@mui/icons-material/Delete';
import SendIcon from '@mui/icons-material/Send';
import Stack from '@mui/material/Stack';

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
      </>
    );
};

export default Second;