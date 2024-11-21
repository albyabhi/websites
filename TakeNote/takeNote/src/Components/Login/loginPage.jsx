import React, { useState } from 'react';
import { TextField, Button, Container, Box, Typography, Grid, Snackbar } from '@mui/material';
import { Alert } from '@mui/material';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const LoginPage = () => {
  const navigate = useNavigate(); 
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [openSnackbar, setOpenSnackbar] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState('');
  const [loading, setLoading] = useState(false);

  const handleEmailChange = (e) => setEmail(e.target.value);
  const handlePasswordChange = (e) => setPassword(e.target.value);

  const handleSubmit = async () => {
    if (!email || !password) {
      setSnackbarMessage('Please enter both email and password.');
      setOpenSnackbar(true);
      return;
    }
  
    setLoading(true);
  
    try {
      const response = await axios.post('/auth/login', { email, password });    
      localStorage.setItem('token', response.data.token);
      setSnackbarMessage('Login successful!');
      setOpenSnackbar(true);
      navigate('/');
    } catch (error) {
      if (error.response) {
        setSnackbarMessage(error.response.data.message || 'Login failed');
      } else {
        setSnackbarMessage('An unexpected error occurred');
      }
      setOpenSnackbar(true);
    }
  
    setLoading(false);
  };

  return (
    <Box
      sx={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Container component="main" maxWidth="xs">
        <Box
          sx={{
            display: 'flex',
            backgroundColor: '#f5f5f5', // Optional: background color for the page

            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            padding: 3,
            boxShadow: 3,
            borderRadius: 2,
          }}
        >
          <Typography variant="h5" gutterBottom>
            Login
          </Typography>

          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                label="Email"
                type="email"
                fullWidth
                variant="outlined"
                value={email}
                onChange={handleEmailChange}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                label="Password"
                type="password"
                fullWidth
                variant="outlined"
                value={password}
                onChange={handlePasswordChange}
              />
            </Grid>
          </Grid>

          <Button
            variant="contained"
            color="primary"
            fullWidth
            onClick={handleSubmit}
            sx={{ mt: 2 }}
            disabled={loading} // Disable button while loading
          >
            {loading ? 'Logging In...' : 'Login'}
          </Button>
        </Box>

        <Snackbar
          open={openSnackbar}
          autoHideDuration={3000}
          onClose={() => setOpenSnackbar(false)}
        >
          <Alert onClose={() => setOpenSnackbar(false)} severity={snackbarMessage === 'Login successful!' ? 'success' : 'error'}>
            {snackbarMessage}
          </Alert>
        </Snackbar>
      </Container>
    </Box>
  );
};

export default LoginPage;
