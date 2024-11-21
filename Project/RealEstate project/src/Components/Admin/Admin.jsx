import React, { useState, useEffect } from 'react';
import {
  CssBaseline,
  Drawer,
  AppBar,
  Toolbar,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Typography,
  Container,
  Box,
  IconButton,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Button,
  TextField, // Import TextField for the "About" section
} from '@mui/material';
import { Dashboard, ContactMail, Menu, ChevronLeft } from '@mui/icons-material';
import axios from 'axios';

const drawerWidth = 240;

const Admin = () => {
  const [activeSection, setActiveSection] = useState('Datas');
  const [leftDrawerOpen, setLeftDrawerOpen] = useState(true);
  const [data, setData] = useState([]);

  const handleLeftDrawerToggle = () => {
    setLeftDrawerOpen(!leftDrawerOpen);
  };

  const fetchData = async () => {
    try {
      const response = await axios.get('http://localhost:5000/api/data/fetchData');
      console.log(response.data);
      setData(response.data.data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/api/data/delete/${id}`);
      setData(data.filter(item => item._id !== id));
    } catch (error) {
      console.error('Error deleting data:', error);
      // Optionally show a user-friendly message here
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const renderContent = () => {
    switch (activeSection) {
      case 'Datas':
        return (
          <Box>
            <Typography variant="h4">Datas Section</Typography>
            <Typography variant="body1">Here you can manage your data.</Typography>
            <TableContainer>
              <Table>
                <TableHead>
                  <TableRow>
                    <TableCell>Real Estate Type</TableCell>
                    <TableCell>District</TableCell>
                    <TableCell>BHK</TableCell>
                    <TableCell>About</TableCell>
                    <TableCell>Images</TableCell>
                    <TableCell>Actions</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {data.map((item) => (
                    <TableRow key={item._id}>
                      <TableCell>{item.realEstateType}</TableCell>
                      <TableCell>{item.selectedDistrict}</TableCell>
                      <TableCell>{item.bhk}</TableCell>
                      <TableCell>
                        <TextField
                          multiline
                          rows={3}
                          variant="outlined"
                          value={item.about} // Display the "about" text
                          InputProps={{
                            readOnly: true, // Make it read-only
                          }}
                          fullWidth
                        />
                      </TableCell>
                      <TableCell>
                        {item.imageUrls.map((url, index) => (
                          <img key={index} src={url} alt={`Uploaded ${index}`} style={{ width: '50px', height: 'auto', margin: '5px' }} />
                        ))}
                      </TableCell>
                      <TableCell>
                        <Button
                          variant="contained"
                          color="secondary"
                          onClick={() => handleDelete(item._id)}
                          sx={{ backgroundColor: '#d32f2f', '&:hover': { backgroundColor: '#c62828' } }} // Custom styles for visibility
                        >
                          Delete
                        </Button>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </Box>
        );
      case 'Enquiries':
        return (
          <Box>
            <Typography variant="h4">Enquiries Section</Typography>
            <Typography variant="body1">Here you can manage your enquiries.</Typography>
          </Box>
        );
      default:
        return null;
    }
  };

  return (
    <div style={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar position="fixed" sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open left drawer"
            onClick={handleLeftDrawerToggle}
            edge="start"
            sx={{ mr: 2 }}
          >
            <Menu />
          </IconButton>
          <Typography variant="h6" noWrap component="div">
            Admin Dashboard
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            boxSizing: 'border-box',
            backgroundColor: '#f4f4f4',
            transition: 'width 0.3s',
          },
        }}
        variant="persistent"
        anchor="left"
        open={leftDrawerOpen}
      >
        <Toolbar>
          <IconButton onClick={handleLeftDrawerToggle}>
            <ChevronLeft />
          </IconButton>
        </Toolbar>
        <List>
          <ListItem button onClick={() => setActiveSection('Datas')}>
            <ListItemIcon>
              <Dashboard />
            </ListItemIcon>
            <ListItemText primary="Datas" />
          </ListItem>
          <ListItem button onClick={() => setActiveSection('Enquiries')}>
            <ListItemIcon>
              <ContactMail />
            </ListItemIcon>
            <ListItemText primary="Enquiries" />
          </ListItem>
        </List>
      </Drawer>
      <Container
        sx={{
          flexGrow: 1,
          p: 3,
          marginLeft: `${leftDrawerOpen ? drawerWidth : 0}px`,
          transition: 'margin-left 0.3s',
        }}
      >
        <Toolbar />
        {renderContent()}
      </Container>
    </div>
  );
};

export default Admin;
