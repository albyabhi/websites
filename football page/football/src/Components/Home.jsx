import React, { useState } from 'react';

import { useTheme } from '@mui/material/styles';
import { Box, Typography, Grid, Card, CardContent } from '@mui/material';
import Appbar from './Home/Appbar';
import SecondAppBar from './Home/SecondAppBar.JSX';
import Matches from './Home/matches/Matches';
import Live from './Home/live/Live';
import Table from './Home/Table/Table';

const Home = () => {
  const theme = useTheme(); 
  const [selectedView , setSelectedView]=useState('');
  
  const handleViewChange = (view) => {
    setSelectedView(view);
  };

  return (
    
    <Box
      sx={{
        backgroundColor: theme.palette.background.default, // Use background color from the theme
        color: theme.palette.text.primary, // Use primary text color
        padding: theme.spacing(2), // Use spacing from the theme
        minHeight: '100vh', // Full height for the home section
      }}
    >  
    <Box>
        <Appbar />
    </Box>
    <Box>
        <SecondAppBar onViewChange={handleViewChange} />
    </Box>

    <Box mt={2}>
        {selectedView === 'matches' && <Matches />}
        {selectedView === 'live' && <Live />}
        {selectedView === 'table' && <Table />}
        
      </Box>
      
    </Box>
  );
};

export default Home;
