// models/user.js

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create the user schema
const userSchema = new Schema({
    username: {
        type: String,
        required: true,
        unique: true,
        trim: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        lowercase: true,
        
    },
    phoneNumber: {
        type: String,
        required: true,
        unique: true,
        trim: true,
    },
    password: {
        type: String,
        required: true,
        minlength: 6
    }
}, {
    timestamps: true 
});

// Create a model using the schema
const User = mongoose.model('User', userSchema);

module.exports = User;
