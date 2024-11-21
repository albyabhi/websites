// src/theme.js

import { createTheme } from '@mui/material/styles';

const lightTheme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#90CAF9', // Soft Sky Blue
    },
    secondary: {
      main: '#A5D6A7', // Soft Mint Green
    },
    background: {
      default: '#F5F5F5', // Light Gray for background
      paper: '#FFFFFF', // White for paper elements
    },
    text: {
      primary: '#424242', // Dark Gray for primary text
      secondary: '#757575', // Slightly lighter gray for secondary text
    },
    error: {
      main: '#f44336',
    },
    warning: {
      main: '#ffa726',
    },
    info: {
      main: '#29b6f6',
    },
    success: {
      main: '#66bb6a',
    },
    accent1: {
      main: '#F48FB1', // Pastel Pink for accents
    },
    accent2: {
      main: '#CE93D8', // Lavender for highlights
    },
  },
  typography: {
    fontFamily: 'Roboto, Arial, sans-serif',
    h1: {
      fontSize: '2.5rem',
      fontWeight: 700,
      color: '#424242',
    },
    h2: {
      fontSize: '2rem',
      fontWeight: 600,
      color: '#424242',
    },
    body1: {
      fontSize: '1rem',
      color: '#424242',
    },
  },
});

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#90CAF9', // Keeping the same soft sky blue
    },
    secondary: {
      main: '#A5D6A7', // Keeping the same soft mint green
    },
    background: {
      default: '#303030', // Dark gray for dark mode background
      paper: '#424242', // Slightly lighter dark gray for card-like elements
    },
    text: {
      primary: '#E0E0E0', // Light gray for primary text
      secondary: '#B0BEC5', // Lighter gray for secondary text
    },
    error: {
      main: '#f44336',
    },
    warning: {
      main: '#ffa726',
    },
    info: {
      main: '#29b6f6',
    },
    success: {
      main: '#66bb6a',
    },
    accent1: {
      main: '#F48FB1', // Pastel Pink for accents, still relevant in dark mode
    },
    accent2: {
      main: '#CE93D8', // Lavender for highlights
    },
  },
  typography: {
    fontFamily: 'Roboto, Arial, sans-serif',
    h1: {
      fontSize: '2.5rem',
      fontWeight: 700,
      color: '#E0E0E0',
    },
    h2: {
      fontSize: '2rem',
      fontWeight: 600,
      color: '#E0E0E0',
    },
    body1: {
      fontSize: '1rem',
      color: '#E0E0E0',
    },
  },
});

export { lightTheme, darkTheme };
