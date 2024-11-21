import React from 'react';
import { AppBar, Toolbar, Button, Box } from '@mui/material';

const SecondAppBar = ({ onViewChange }) => {

   

  return (
    <Box>
    <AppBar
      position="static"
      sx={{
        backgroundColor: 'transparent', // No background color
        boxShadow: 'none', // Remove shadow
        padding: '0 16px',
      }}
    >
      <Toolbar sx={{ justifyContent: 'center' }}>
        <Box sx={{ display: 'flex', gap: 3 }}>
          <Button  color="inherit" onClick={()=> onViewChange('matches') }>Matches</Button>
          <Button color="inherit" onClick={()=> onViewChange('live') }>Live</Button>
          <Button color="inherit"  onClick={()=> onViewChange('table') }>Table</Button>
        </Box>
      </Toolbar>
    </AppBar>
    <Box>

    </Box>
    </Box>
   
  );
};

export default SecondAppBar;
