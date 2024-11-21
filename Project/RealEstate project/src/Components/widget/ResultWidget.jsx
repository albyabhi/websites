import React from 'react';
import { Box, Typography } from '@mui/material';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const ResultWidget = ({ realEstateType, selectedDistrict, bhk, about, imageUrls }) => {
  // Slider settings
  const settings = {
    dots: true,  // Show dots for navigation
    dotsClass: "slick-dots custom-dots", // Custom class for dots
    infinite: true,  // Loop back to the start after the last image
    speed: 500,  // Transition speed
    slidesToShow: 1,  // Number of slides to show at once
    slidesToScroll: 1,  // Number of slides to scroll
    autoplay: true,  // Enable autoplay
    autoplaySpeed: 3000,  // Change image every 3 seconds
  };

  return (
    <Box sx={{ border: '1px solid #ccc', borderRadius: '5px', padding: 2, marginBottom: 2, boxShadow: 2, transition: 'box-shadow 0.3s', '&:hover': { boxShadow: 4 } }}>
      {imageUrls.length > 1 ? (
        <Slider {...settings}>
          {imageUrls.map((url, index) => (
            <div key={index}>
              <img
                src={url}
                alt={`Property ${realEstateType} in ${selectedDistrict} - Image ${index + 1}`}
                style={{ width: '100%', height: '300px', objectFit: 'cover', borderRadius: '5px' }}
                onError={(e) => { e.target.onerror = null; e.target.src = 'fallback-image-url.jpg'; }} // Fallback image
              />
            </div>
          ))}
        </Slider>
      ) : (
        <img
          src={imageUrls[0]}
          alt={`Property ${realEstateType} in ${selectedDistrict}`}
          style={{ width: '100%', height: '300px', objectFit: 'cover', borderRadius: '5px' }}
          onError={(e) => { e.target.onerror = null; e.target.src = 'fallback-image-url.jpg'; }} // Fallback image
        />
      )}
      
      {/* Property details */}
      <Typography variant="h6" sx={{ fontWeight: 'bold', marginTop: 2 }}>
        {realEstateType} in {selectedDistrict}
      </Typography>

      {/* Conditionally render BHK value */}
      {bhk > 0 && (
        <Typography variant="body1" sx={{ color: 'text.secondary' }}>
          BHK: {bhk}
        </Typography>
      )}
      
      <Typography 
        variant="body2" 
        sx={{ 
          marginTop: 1,
          maxWidth: '100%', // Ensure text doesn't exceed container width
          maxHeight: '4.5em', // Set max height to accommodate 3 lines
          overflow: 'hidden', // Hide overflow text
          lineHeight: '1.5em', // Set line height for spacing
        }} 
      >
        {about}
      </Typography>
    </Box>
  );
};

export default ResultWidget;
