import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Box from "@mui/material/Box";

const Seven = () => {
  return (
      <>
        <AppBar position="static">
            <Toolbar disableGutters>
            <Typography variant="h6" noWrap component="div" sx={{ mr: 2, display: { xs: 'none', md: 'flex' } }}>
                LOGO
            </Typography>
            </Toolbar>
        </AppBar>

        <Box textAlign="center" p={5}>Ankit</Box>
      </>
  );
};
export default Seven;
