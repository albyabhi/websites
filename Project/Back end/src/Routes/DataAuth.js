const express = require('express');
const router = express.Router();
const multer = require('multer');
const path = require('path');
const Data = require('../Schemas/dataSchema');


// Configure storage for multer
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads/'); // Destination folder
  },
  filename: (req, file, cb) => {
    // Use the original filename
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
    cb(null, `${file.fieldname}-${uniqueSuffix}${path.extname(file.originalname)}`);
  }
});

// Apply the storage engine to multer
const upload = multer({ storage: storage });

// Handle POST request to save form data with images
router.post('/saveData', upload.array('images', 10), async (req, res) => {
  const { realEstateType, selectedDistrict, bhk, about } = req.body;
  const files = req.files;

  // Map the uploaded files to their URLs
  const imageUrls = files.map(file => `http://localhost:5000/uploads/${file.filename}`);

  try {
    // Create a new document and save to MongoDB
    const dataEntry = new Data({
      realEstateType,
      selectedDistrict,
      bhk,
      about,
      imageUrls
    });

    // Save the document
    await dataEntry.save();

    console.log('Received Form Data:', { realEstateType, selectedDistrict, bhk, about });
    console.log('Uploaded Image URLs:', imageUrls);

    res.status(200).json({ message: 'Data and files saved successfully', data: { realEstateType, selectedDistrict, bhk, about }, imageUrls });
  } catch (error) {
    console.error('Error saving data:', error);
    res.status(500).json({ message: 'Error saving data', error });
  }
});

router.get('/fetchData', async (req, res) => {
  try {
    // Fetch all documents from the Data collection
    const allData = await Data.find(); // This retrieves all documents

    // Check if data is found
    if (allData.length === 0) {
      return res.status(404).json({ message: 'No data found' });
    }

    res.status(200).json({ message: 'Data fetched successfully', data: allData });
  } catch (error) {
    console.error('Error fetching data:', error);
    res.status(500).json({ message: 'Error fetching data', error });
  }
});


router.delete('/delete/:id', async (req, res) => {
  const { id } = req.params;

  try {
    // Find the data entry by ID and remove it
    const deletedEntry = await Data.findByIdAndDelete(id);

    // Check if the entry was found and deleted
    if (!deletedEntry) {
      return res.status(404).json({ message: 'Data not found' });
    }

    res.status(200).json({ message: 'Data deleted successfully', deletedEntry });
  } catch (error) {
    console.error('Error deleting data:', error);
    res.status(500).json({ message: 'Error deleting data', error });
  }
});

module.exports = router;