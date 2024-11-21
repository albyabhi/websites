import React, { useEffect, useState } from 'react';
import { FormControl, InputLabel, Select, MenuItem, AppBar, Toolbar, Typography, Box, Grid, TextField, Button, Container } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import logo from '../assets/1.jpg';
import AddIcon from '../assets/Icons/property.png';
import EmailIcon from '../assets/Icons/email.png';
import ContactIcon from '../assets/Icons/telephone.png';
import axios from 'axios';
import ResultWidget from '../widget/ResultWidget';
import { useNavigate } from 'react-router-dom';
import ContactPopup from '../widget/ContactPopup';
const Home = () => {
  const [realEstateType, setRealEstateType] = useState('');
  const [district, setDistrict] = useState('');
  const [bhk, setBhk] = useState('');
  const [dataList, setDataList] = useState([]); // Original data
  const [filteredData, setFilteredData] = useState([]); // Filtered data
  const theme = useTheme();
  const navigate = useNavigate(); 
  const [openContactPopup, setOpenContactPopup] = useState(false);

  const handleContactClick = () => {
    setOpenContactPopup(true);
  };

  const handleCloseContactPopup = () => {
    setOpenContactPopup(false);
  };
 


  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/Data/fetchData');
        console.log(response.data);
        setDataList(response.data.data); // Store the original data
        setFilteredData(response.data.data); // Initialize filteredData with the original data
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  const handleChange = (event) => {
    setRealEstateType(event.target.value);
  };

  const handleDistrictChange = (event) => {
    setDistrict(event.target.value);
  };

  const handleBhkChange = (event) => {
    setBhk(event.target.value); 
  };

  const handleFilterClick = () => {
    const filtered = dataList.filter(item => {
      return (
        (realEstateType ? item.realEstateType === realEstateType : true) &&
        (district ? item.selectedDistrict === district : true) &&
        (bhk ? item.bhk === bhk : true)
      );
    });
    setFilteredData(filtered); // Update filteredData with filtered results
  };

  const handleResetClick = () => {
    setRealEstateType(''); // Reset the filters
    setDistrict('');
    setBhk('');
    setFilteredData(dataList); // Reset the filtered data to the original fetched data
  };

  const handleSellPropertyClick = () => {
    navigate('/upload');
  };

  const districtsOfKerala = [
    'Thiruvananthapuram', 'Kollam', 'Pathanamthitta', 'Alappuzha', 'Kottayam', 'Idukki',
    'Ernakulam', 'Thrissur', 'Palakkad', 'Malappuram', 'Kozhikode', 'Wayanad', 'Kannur', 'Kasaragod',
  ];

  return (
    <div>
      {/* Header */}
      <Box sx={{ borderRadius: '5px', overflow: 'hidden' }}>
        <AppBar position="fixed" sx={{ backgroundColor: "#fff", top: 0 }} elevation={0}>
          <Toolbar sx={{ justifyContent: 'center', alignItems: 'center' }}>
            <Box component="img" src={logo} alt="logo" sx={{ height: 100, width: 'auto', mt: 1, borderRadius: "9px" }} />
          </Toolbar>
        </AppBar>
      </Box>

      {/* Second AppBar with options */}
      <Box sx={{ borderRadius: '5px', overflow: 'hidden' }}>
      <AppBar position="relative" sx={{ backgroundColor: "#fff", mt: 12 }} elevation={0}>
        <Toolbar sx={{ justifyContent: 'center' }}>
          <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', mx: { xs: 1, sm: 2 } }}>
            <Box component="img" src={EmailIcon} alt="Email Icon" sx={{ height: 24, width: 'auto' }} />
            <Typography variant="body1" component="a" href="mailto:example@example.com" sx={{ textDecoration: 'none' }}>
              Email
            </Typography>
          </Box>
          <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', mx: { xs: 3, sm: 4 }, cursor: 'pointer' }} 
               onClick={() => {/* Add your sell property logic here */}}>
            <Box component="img" src={AddIcon} alt="Add Property Icon" sx={{ height: 24, width: 'auto' }} />
            <Typography variant="body1">Sell Your Property</Typography>
          </Box>
          {/* Directly handle the click on the Contact Typography */}
          <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', mx: { xs: 1, sm: 2 }, cursor: 'pointer' }} 
               onClick={handleContactClick}>
            <Box component="img" src={ContactIcon} alt="Contact Icon" sx={{ height: 24, width: 'auto' }} />
            <Typography variant="body1" onClick={handleContactClick} sx={{ cursor: 'pointer' }}>
              Contact
            </Typography>
          </Box>
        </Toolbar>
      </AppBar>

      {/* Contact Popup */}
      <ContactPopup open={openContactPopup} onClose={handleCloseContactPopup} />
    </Box>

      {/* Search Section */}
      <Box sx={{ padding: 2, mt: 2 }}>
        <Container maxWidth="md">
          <Grid container spacing={4} justifyContent="center">
            <Grid item xs={12}>
              <Typography variant="h6" align="center">SEARCH</Typography>
            </Grid>
            <Grid item xs={12} sm={4}>
              <FormControl fullWidth variant="outlined" sx={{ backgroundColor: theme.palette.background.paper, borderRadius: '5px' }}>
                <InputLabel>Type</InputLabel>
                <Select value={realEstateType} onChange={handleChange} label="Type" sx={{ borderRadius: '5px' }}>
                  <MenuItem value="House">House</MenuItem>
                  <MenuItem value="Land">Land</MenuItem>
                  <MenuItem value="Building">Building</MenuItem>
                  <MenuItem value="Shop">Shop</MenuItem>
                  <MenuItem value="Office">Office</MenuItem>
                  <MenuItem value="Apartment">Apartment</MenuItem>
                  <MenuItem value="Villa">Villa</MenuItem>
                  <MenuItem value="Warehouse">Warehouse</MenuItem>
                  <MenuItem value="Farm">Farm</MenuItem>
                  <MenuItem value="Commercial">Commercial</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={12} sm={4}>
              <FormControl fullWidth variant="outlined" sx={{ backgroundColor: theme.palette.background.paper, borderRadius: '5px' }}>
                <InputLabel>District</InputLabel>
                <Select value={district} onChange={handleDistrictChange} label="District" sx={{ borderRadius: '5px' }}>
                  {districtsOfKerala.map((district) => (
                    <MenuItem key={district} value={district}>{district}</MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={12} sm={4}>
              <TextField fullWidth variant="outlined" label="BHK" value={bhk} onChange={handleBhkChange}
                sx={{ borderRadius: '5px', backgroundColor: theme.palette.background.paper }} />
            </Grid>

            <Grid item xs={12} sm={4} display="flex" justifyContent="center" mt={2}>
              <Button variant="contained" color="primary" onClick={handleFilterClick} sx={{ borderRadius: '5px' }}>
                Filter
              </Button>
            </Grid>

            <Grid item xs={12} sm={4} display="flex" justifyContent="center" mt={2}>
              <Button variant="outlined" color="secondary" onClick={handleResetClick} sx={{ borderRadius: '5px' }}>
                Reset
              </Button>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* Results Section */}
      <Container maxWidth="md" sx={{ mt: 4 }}>
  {filteredData && filteredData.length > 0 ? (
    [...filteredData].reverse().map((item, index) => (
      <ResultWidget
        key={index}
        realEstateType={item.realEstateType}
        selectedDistrict={item.selectedDistrict}
        bhk={item.bhk}
        about={item.about}
        imageUrls={item.imageUrls}
      />
    ))
  ) : (
    <Typography align="center">No results found.</Typography>
  )}
</Container>
    </div>
  );
};

export default Home;
