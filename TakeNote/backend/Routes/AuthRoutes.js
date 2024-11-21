require('dotenv').config();
const express = require('express');
const router = express.Router();
const User = require('../models/User')
const JWT_SECRET = process.env.JWT_SECRET;
const jwt = require('jsonwebtoken');



router.post('/signup', async (req, res) => {
  const { email, username, password } = req.body;

  console.log('Received signup data:', { email, username, password });

  try {
    // Check if email or username already exists
    const existingUser = await User.findOne({ $or: [{ email }, { username }] });
    if (existingUser) {
      return res.status(400).json({ message: 'Email or username already in use' });
    }

    // Create and save the user
    const newUser = new User({ email, username, password });
    await newUser.save();

    // Send a success response
    res.status(201).json({
      message: 'User signed up successfully',
      data: { email, username }
    });
  } catch (error) {
    console.error('Error saving user:', error);
    res.status(500).json({ message: 'Server error during signup' });
  }
});


router.post('/login', async (req, res) => {
  const { email, password } = req.body;

  try {
    
    const user = await User.findOne({ email });
    if (!user || user.password !== password) {
      return res.status(401).json({ message: 'Invalid credentials' });
    }

    
    const token = jwt.sign({ userId: user._id }, JWT_SECRET, { expiresIn: '1h' });


    res.status(200).json({
      message: 'Login successful',
      token,
      data: { email: user.email, username: user.username }
    });
  } catch (error) {
    console.error('Error during login:', error);
    res.status(500).json({ message: 'Server error during login' });
  }
});

module.exports = router;
