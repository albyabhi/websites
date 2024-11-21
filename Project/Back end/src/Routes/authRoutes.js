// routes/authRoutes.js
const dotenv = require('dotenv');
const express = require('express');
const bcrypt = require('bcryptjs');
const User = require('../Schemas/userSchema');
const router = express.Router();
const jwt = require('jsonwebtoken');
dotenv.config();

// POST route for user registration
router.post('/register', async (req, res) => {
    console.log('Received data:', req.body);
    const { email, username, password, phno } = req.body;

    try {
        // Check if the email or username already exists
        const existingUser = await User.findOne({ $or: [{ email }, { username }] });
        if (existingUser) {
            return res.status(400).json({ message: 'Email or username already in use.' });
        }

        // Hash the password
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        // Create a new user instance
        const newUser = new User({
            username,
            email,
            phoneNumber: phno, // Assuming phno is passed as a string
            password: hashedPassword,
        });

        // Save the user to the database
        await newUser.save();

        // Send a success response
        return res.status(201).json({ message: 'User registered successfully' });

    } catch (error) {
        console.error('Error during registration:', error);
        return res.status(500).json({ message: 'Server error. Please try again later.' });
    }
});

router.post('/login', async (req, res) => {
    const { email, password } = req.body;

    try {
        // Check if the user exists
        const user = await User.findOne({ email });
        if (!user) {
            return res.status(400).json({ message: 'Invalid email or password.' });
        }

        // Compare the password with the hashed password
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(400).json({ message: 'Invalid email or password.' });
        }

        // Generate a JWT
        const payload = {
            user: {
                id: user.id,
            },
        };

        const token = jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: process.env.JWT_EXPIRES_IN });

        // Send a success response with the token
        res.status(200).json({ message: 'Login successful', token });

    } catch (error) {
        console.error('Error during login:', error);
        res.status(500).json({ message: 'Server error. Please try again later.' });
    }
});

module.exports = router;
