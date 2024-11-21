// theme.js

import { createTheme } from '@mui/material/styles';


// Create a theme instance.
const theme = createTheme({
  palette: {
    background: {
      default: '#17153B', // Background color
    },
    primary: {
      main: '#2E236C', // Component color
    },
    text: {
      primary: '#FFFFFF', // Font color
      secondary: '#E0E0E0', // Darker than white for headings
    },
  },
  typography: {
    h1: {
      color: '#D0D0D0', // Example heading color, darker than white
    },
    h2: {
      color: '#D0D0D0', // Adjust for other headings as needed
    },
    // Add more typography styles as needed
  },
});

export { theme }; // Export the theme
