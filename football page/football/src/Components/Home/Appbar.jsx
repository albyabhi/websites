import React from 'react';
import { AppBar, Toolbar, Typography, Box, Button } from '@mui/material';


const Appbar = () => {
  return (
    <AppBar
      position="static"
      sx={{
        backgroundColor: 'rgba(255, 255, 255, 0.1)', // Semi-transparent white for glass effect
        backdropFilter: 'blur(10px)', // Frosted glass effect
        borderRadius: '8px', // Add border radius
        boxShadow: '0 4px 20px rgba(0, 0, 0, 0.2)', // Optional: shadow for depth
        // Optional: Add some padding for the AppBar
        padding: '0 16px',
      }}
    >
      <Toolbar>
        {/* Logo */}
        <Box sx={{ flexGrow: 1, display: 'flex', alignItems: 'center'  }}>
          <Typography
            variant="h6"
            sx={{
              fontWeight: 300, // Thin font weight for "Know"
              color: 'inherit', // Inherit color from AppBar
            }}
          >
            Know{' '}
          </Typography>
          <Typography
            variant="h6"
            sx={{
              fontWeight: 700, // Bold font weight for "Football"
              color: 'inherit', // Inherit color from AppBar
            }}
          >
            Football
          </Typography>
        </Box>

        
      </Toolbar>
    </AppBar>
  )
}

export default Appbar