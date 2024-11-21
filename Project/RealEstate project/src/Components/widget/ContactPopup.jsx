import React from 'react';
import { Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Button, Typography, Box } from '@mui/material';
import ContactGIFIcon from '../assets/Icons/phone-contact.gif';

const ContactPopup = ({ open, onClose }) => {
  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle>
        <Box display="flex" justifyContent="center" mb={2}>
          <img src={ContactGIFIcon} alt="Contact Icon" style={{ width: '50px', height: '50px' }} />
        </Box>
        Contact Details
      </DialogTitle>
      <DialogContent>
        <DialogContentText>
          <Typography variant="body1">Name: BIJU AM</Typography>
          <Typography variant="body1">Phone: +91 9605265094</Typography>
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button component="a" href="tel:+919605265094" color="primary">
          Call
        </Button>
        <Button onClick={onClose} color="primary">
          Close
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default ContactPopup;
