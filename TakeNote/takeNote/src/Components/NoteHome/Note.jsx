import { Box } from '@mui/material';
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Notepad from './Components/Notepad';
import Sidebar from './Components/Sidebar';

const Note = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem('token');
    console.log(token);
    if (!token) {
      navigate('/login'); // Redirect to login if token is not found
    }
  }, [navigate]);

  return (
    <Box sx={{ display: 'flex', height: '100vh' }}>
      <Box>
        <Sidebar />
      </Box>

      {/* Notepad component, taking remaining space */}
      <Box sx={{ flexGrow: 1, padding: 2 }}>
        <Notepad />
      </Box>
    </Box>
  );
};

export default Note;
