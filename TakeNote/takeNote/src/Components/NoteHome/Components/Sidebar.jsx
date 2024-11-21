import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Drawer, List, ListItem, ListItemText, IconButton, Box, ListItemIcon, Divider } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import HomeIcon from '@mui/icons-material/Home';
import NoteIcon from '@mui/icons-material/Note';
import SettingsIcon from '@mui/icons-material/Settings';
import LogoutIcon from '@mui/icons-material/Logout';
import axios from 'axios';

const Sidebar = () => {
  const [open, setOpen] = useState(true);
  const [notes, setNotes] = useState([]); // Store notes from the API
  const navigate = useNavigate();

  // Toggle sidebar visibility
  const toggleDrawer = () => {
    setOpen(!open);
  };

  // Logout function
  const handleLogout = () => {
    localStorage.removeItem('token');
    navigate('/login');
  };

  // Fetch notes from API when the component mounts
  useEffect(() => {
    const fetchNotes = async () => {
      try {
        const token = localStorage.getItem('token');
        if (!token) {
          return navigate('/login');
        }

        const response = await axios.get(
          '/note/get-notes', {
          headers: {
            Authorization: `Bearer ${token}`, // Send token for authentication
          },
        });

        setNotes(response.data.notes); // Set the notes to state
      } catch (error) {
        console.error('Error fetching notes:', error);
        // Optionally redirect if there's an error (e.g., token is expired)
        navigate('/login');
      }
    };

    fetchNotes();
  }, [navigate]);

  return (
    <Box sx={{ display: 'flex' }}>
      {/* Menu button to toggle the sidebar */}
      <IconButton onClick={toggleDrawer} edge="start" color="inherit" sx={{ marginRight: 2 }}>
        <MenuIcon />
      </IconButton>

      {/* Persistent Drawer for the sidebar */}
      <Drawer
        variant="persistent"
        anchor="left"
        open={open}
        sx={{
          width: 250,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: 250,
            boxSizing: 'border-box',
          },
        }}
      >
        <Box role="presentation">
          <List>
            {/* Sidebar static items */}
            <ListItem button onClick={() => navigate('/home')}>
              <ListItemIcon>
                <HomeIcon />
              </ListItemIcon>
              <ListItemText primary="Home" />
            </ListItem>

            {/* Display note titles dynamically */}
            {notes.length > 0 ? (
              notes.map((note) => (
                <ListItem
                  button
                  key={note._id} // Use note's unique id for the key
                  onClick={() => navigate(`/notes/${note._id}`)} // Navigate to the individual note
                >
                  <ListItemIcon>
                    <NoteIcon />
                  </ListItemIcon>
                  <ListItemText primary={note.title} />
                </ListItem>
              ))
            ) : (
              <ListItem>
                <ListItemText primary="No notes available" />
              </ListItem>
            )}

            <ListItem button onClick={() => navigate('/settings')}>
              <ListItemIcon>
                <SettingsIcon />
              </ListItemIcon>
              <ListItemText primary="Settings" />
            </ListItem>
            <ListItem button onClick={handleLogout}>
              <ListItemIcon>
                <LogoutIcon />
              </ListItemIcon>
              <ListItemText primary="Logout" />
            </ListItem>
          </List>
          <Divider />
        </Box>
      </Drawer>

      {/* Main Content */}
      <Box sx={{ flexGrow: 1, padding: 2 }}>
        {/* Content goes here */}
      </Box>
    </Box>
  );
};

export default Sidebar;
