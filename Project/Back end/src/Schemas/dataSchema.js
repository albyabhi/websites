const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define schema for saving form data with image URLs
const dataSchema = new Schema({
    realEstateType: {
        type: String,
        required: true
    },
    selectedDistrict: {
        type: String,
        required: true
    },
    bhk: {
        type: String,
        required: true
    },
    about: {
        type: String,
        required: true
    },
    imageUrls: [{
        type: String, // URL path to the uploaded image
        required: true
    }],
    createdAt: {
        type: Date,
        default: Date.now
    }
});

// Export the schema
module.exports = mongoose.model('Data', dataSchema);
