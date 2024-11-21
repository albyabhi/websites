import React, { useState } from 'react';
import {
  Button,
  Grid,
  Typography,
  Box,
  IconButton,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  TextField,
  Card,
  CardContent,
  CardActions,
  CardMedia,
} from '@mui/material';
import { PhotoCamera } from '@mui/icons-material';
import GalleryIcon from '../assets/Icons/gallery.png';
import { useNavigate } from 'react-router-dom';

const Types = [
  { value: 'House', label: 'House' },
  { value: 'Land', label: 'Land' },
  { value: 'Building', label: 'Building' },
  { value: 'Shop', label: 'Shop' },
  { value: 'Office', label: 'Office' },
  { value: 'Apartment', label: 'Apartment' },
  { value: 'Villa', label: 'Villa' },
  { value: 'Warehouse', label: 'Warehouse' },
  { value: 'Farm', label: 'Farm' },
  { value: 'Commercial', label: 'Commercial' },
];

const districtsOfKerala = [
  'Thiruvananthapuram',
  'Kollam',
  'Pathanamthitta',
  'Alappuzha',
  'Kottayam',
  'Idukki',
  'Ernakulam',
  'Thrissur',
  'Palakkad',
  'Malappuram',
  'Kozhikode',
  'Wayanad',
  'Kannur',
  'Kasaragod',
];



const Upload = () => {
  const [selectedImages, setSelectedImages] = useState([]);
  const [realEstateType, setRealEstateType] = useState('');
  const [selectedDistrict, setSelectedDistrict] = useState('');
  const [bhk, setBhk] = useState('');
  const [about, setAbout] = useState('');
  const [imageError, setImageError] = useState('');
  const navigate = useNavigate(); 
  const handleImageChange = (event) => {
    const files = Array.from(event.target.files);
    setSelectedImages(files);
    setImageError('');
  };

  const handleRemoveImage = (index) => {
    setSelectedImages((prevImages) => prevImages.filter((_, i) => i !== index));
  };

  const handleTypeChange = (event) => {
    setRealEstateType(event.target.value);
  };

  const handleDistrictChange = (event) => {
    setSelectedDistrict(event.target.value);
  };

  const handleBhkChange = (event) => {
    setBhk(event.target.value);
  };

  const handleAboutChange = (event) => {
    setAbout(event.target.value);
  };

  const handleSubmit = async () => {
    if (selectedImages.length === 0) {
      setImageError('Please select at least one image.');
      return;
    }

    const formData = new FormData();
    formData.append('realEstateType', realEstateType);
    formData.append('selectedDistrict', selectedDistrict);
    formData.append('bhk', bhk);
    formData.append('about', about);

    selectedImages.forEach((image) => {
      formData.append('images', image);
    });

    try {
      const response = await fetch('http://localhost:5000/api/Data/saveData', {
        method: 'POST',
        body: formData,
      });

      const data = await response.json();
      console.log('Response from server:', data);
      navigate('/Home');
    } catch (error) {
      console.error('Error submitting form:', error);
    }
  };

  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: '100vh',
        backgroundColor: '#f5f5f5', // Light background for contrast
        padding: 2,
      }}
    >
      <Card sx={{ maxWidth: 600, width: '100%', borderRadius: 2, boxShadow: 3 }}>
        <CardContent>
          <Typography variant="h6" align="center" gutterBottom>
            Upload Images
          </Typography>
          <input
            accept="image/*"
            style={{ display: 'none' }}
            id="image-upload"
            type="file"
            multiple
            onChange={handleImageChange}
          />
          <label htmlFor="image-upload">
            <Button
              variant="contained"
              component="span"
              startIcon={<img src={GalleryIcon} alt="Gallery" style={{ width: '24px', height: '24px' }} />}
              sx={{ display: 'flex', justifyContent: 'center', width: '100%', mb: 2 }}
            >
              Choose Images
            </Button>
          </label>

          <Grid container spacing={2} sx={{ marginTop: 1 }}>
            {selectedImages.length > 0 ? (
              selectedImages.map((image, index) => (
                <Grid item xs={12} sm={6} md={4} key={index}>
                  <Box
                    sx={{
                      position: 'relative',
                      width: '100%',
                      height: 200,
                      overflow: 'hidden',
                      borderRadius: 1,
                      border: '1px solid #ddd',
                    }}
                  >
                    <img
                      src={URL.createObjectURL(image)}
                      alt={`Selected Image ${index + 1}`}
                      style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                    />
                    <IconButton
                      sx={{
                        position: 'absolute',
                        top: 8,
                        right: 8,
                        backgroundColor: 'rgba(0, 0, 0, 0.5)',
                        color: 'white',
                      }}
                      onClick={() => handleRemoveImage(index)}
                    >
                      &times;
                    </IconButton>
                  </Box>
                </Grid>
              ))
            ) : (
              <Typography variant="body2" color="text.secondary" sx={{ textAlign: 'center', width: '100%' }}>
                No images selected
              </Typography>
            )}
          </Grid>

          {imageError && (
            <Typography variant="body2" color="error" sx={{ marginTop: 1 }}>
              {imageError}
            </Typography>
          )}

          <Grid container spacing={2} sx={{ marginTop: 2 }}>
            <Grid item xs={12} sm={4}>
              <FormControl fullWidth variant="outlined">
                <InputLabel>Type</InputLabel>
                <Select
                  value={realEstateType}
                  onChange={handleTypeChange}
                  label="Type"
                  sx={{ borderRadius: '5px' }}
                >
                  {Types.map((type) => (
                    <MenuItem key={type.value} value={type.value}>
                      {type.label}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Grid>

            <Grid item xs={12} sm={4}>
              <FormControl fullWidth variant="outlined">
                <InputLabel>District</InputLabel>
                <Select
                  value={selectedDistrict}
                  onChange={handleDistrictChange}
                  label="District"
                  sx={{ borderRadius: '5px' }}
                >
                  {districtsOfKerala.map((district, index) => (
                    <MenuItem key={index} value={district}>
                      {district}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Grid>

            <Grid item xs={12} sm={4}>
              <TextField
                fullWidth
                variant="outlined"
                label="BHK*"
                type="number"
                value={bhk}
                onChange={handleBhkChange}
                inputProps={{ min: 0 }}
              />
            </Grid>

            <Grid item xs={12}>
              <TextField
                fullWidth
                variant="outlined"
                label="About"
                value={about}
                onChange={handleAboutChange}
                error={about.length > 0 && about.length < 100}
                helperText={
                  about.length < 100
                    ? `Minimum 100 characters required. (${about.length}/100)`
                    : ''
                }
              />
            </Grid>
          </Grid>
        </CardContent>

        <CardActions sx={{ justifyContent: 'center', marginBottom: 2 }}>
          <Button variant="contained" color="primary" onClick={handleSubmit}>
            Submit
          </Button>
        </CardActions>
      </Card>
    </Box>
  );
};

export default Upload;
