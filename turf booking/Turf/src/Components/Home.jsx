import React, { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box"; // Import Box for layout control
import {
  Button,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from "@mui/material";
import turfImage from "../assets/images/turf.jpeg";

import { Facebook, Instagram, Twitter, LinkedIn } from "@mui/icons-material";
import IconButton from "@mui/material/IconButton";
import Link from "@mui/material/Link";


const Home = () => {
  const [showTable, setShowTable] = useState(false);

  // Generate time slots
  const generateTimeSlots = () => {
    const slots = [];
    for (let hour = 6; hour <= 23; hour++) {
      const startTime = `${hour % 12 === 0 ? 12 : hour % 12}:00 ${
        hour < 12 ? "AM" : "PM"
      }`;
      const endTime = `${(hour + 1) % 12 === 0 ? 12 : (hour + 1) % 12}:00 ${
        hour + 1 < 12 ? "AM" : "PM"
      }`;
      slots.push({ time: `${startTime} - ${endTime}`, status: "Available" });
    }
    return slots;
  };

  const timeSlots = generateTimeSlots();

  return (
    <div className="logo-title-container">
      <Box
        sx={{
          backgroundImage: `url(${turfImage})`, // Use turfImage as background
          backgroundSize: "cover", // Cover the entire box
          backgroundPosition: "center", // Center the image
          backgroundRepeat: "no-repeat", // Prevent repeating the image
          minHeight: "80vh", // Set minimum height to cover the viewport
        }}
      >
        <AppBar
          sx={{
            backgroundColor: "transparent", // Make AppBar transparent
            boxShadow: "none",
            color: "white", // Change text color if needed
          }}
        >
          <Toolbar>
  <Box sx={{ border: 1, borderColor: "white", padding: 0.6, borderRadius: 3 }}> {/* Full border around the content */}
    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
      EL{" "}
      <Box component="span" sx={{ color: "grey", fontWeight: "bold" }}>
        Futuro
      </Box>{" "}
      Accademia
    </Typography>
  </Box>
</Toolbar>
        </AppBar>

        {/* Spacer to prevent overlap with AppBar */}
        <Box sx={{ paddingTop: "64px", textAlign: "center", color: "white" }}>
          <Typography
            variant="h4"
            sx={{ marginTop: "20px", fontWeight: "bold" }}
          >
            Experience the Best Turf in Town!
          </Typography>
          <Typography
            variant="body1"
            sx={{ marginTop: "10px", maxWidth: "600px", margin: "0 auto" }}
          >
            Our state-of-the-art football turf offers the perfect playing
            surface for both casual games and competitive matches. Enjoy a
            vibrant atmosphere, top-notch facilities, and a memorable
            experience. Book your slot now and take your game to the next level!
          </Typography>

          <Button
            variant="outlined"
            sx={{
              marginTop: "10px",
              color: "white",
              borderColor: "white",
              "&:hover": {
                backgroundColor: "white",
                color: "black",
              },
            }}
            onClick={() => setShowTable((prev) => !prev)} // Toggle table visibility
          >
            Book YOUR SLOT NOW
          </Button>
        </Box>

        {/* Conditional rendering of the booking table */}
        {showTable && (
          <Box sx={{ padding: "20px", textAlign: "center", color: "white" }}>
            <TableContainer
              component={Paper}
              sx={{ backgroundColor: "rgba(255, 255, 255, 0.1)" }}
            >
              <Table>
                <TableHead>
                  <TableRow>
                    <TableCell sx={{ color: "white" }}>Time</TableCell>
                    <TableCell sx={{ color: "white" }}>Status</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {timeSlots.map((slot, index) => (
                    <TableRow key={index}>
                      <TableCell sx={{ color: "white" }}>{slot.time}</TableCell>
                      <TableCell>
                        <Button
                          variant="contained"
                          sx={{
                            backgroundColor:
                              slot.status === "Available" ? "green" : "gray",
                            color: "white",
                          }}
                          disabled={slot.status !== "Available"}
                          onClick={() => {
                            // Handle booking logic here
                            alert(`Booked slot: ${slot.time}`);
                          }}
                        >
                          {slot.status === "Available" ? "Book Slot" : "Booked"}
                        </Button>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </Box>
        )}


      </Box>
      <Box
      sx={{
        backgroundColor: "#1a1a1a", // Dark background color for contrast
        color: "white",
        padding: "40px 20px",
        textAlign: "center",
      }}
    >
      

      {/* Social Media Links */}
      <Typography variant="h5" sx={{ fontWeight: "bold", marginTop: "40px" }}>
        Connect with Us
      </Typography>
      <Box sx={{ display: "flex", justifyContent: "center", gap: 2, marginTop: "10px" }}>
        <IconButton color="inherit" href="https://facebook.com" target="_blank" rel="noopener">
          <Facebook />
        </IconButton>
        <IconButton color="inherit" href="https://instagram.com" target="_blank" rel="noopener">
          <Instagram />
        </IconButton>
        <IconButton color="inherit" href="https://twitter.com" target="_blank" rel="noopener">
          <Twitter />
        </IconButton>
        <IconButton color="inherit" href="https://linkedin.com" target="_blank" rel="noopener">
          <LinkedIn />
        </IconButton>
      </Box>

      {/* Contact Information */}
      <Typography variant="h5" sx={{ fontWeight: "bold", marginTop: "40px" }}>
        Contact Us
      </Typography>
      <Typography variant="body1" sx={{ marginTop: "10px" }}>
        Email: <Link href="mailto:contact@futuroaccademia.com" sx={{ color: "white" }}>contact@futuroaccademia.com</Link>
      </Typography>
      <Typography variant="body1">
        Phone: <Link href="tel:+1234567890" sx={{ color: "white" }}>+1 (234) 567-890</Link>
      </Typography>
      <Typography variant="body1">
        Address: 123 Turf Street, Sports City, YourCountry
      </Typography>

      
      
    </Box>
    </div>
  );
};

export default Home;
