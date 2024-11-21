// DashboardLayout.jsx
import React from 'react';
import { Box, AppBar, Toolbar, Typography } from '@mui/material';

const DashboardLayout = ({ children }) => {
  return (
    <Box sx={{ display: 'flex' }}>
      <AppBar position="fixed">
        <Toolbar>
          <Typography variant="h6">Dashboard</Typography>
        </Toolbar>
      </AppBar>
      <Box component="main" sx={{ flexGrow: 1, bgcolor: 'background.default', p: 3, mt: 8 }}>
        {children}
      </Box>
    </Box>
  );
};

export default DashboardLayout;
