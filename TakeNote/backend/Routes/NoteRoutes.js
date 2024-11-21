require('dotenv').config();
const express = require('express');
const jwt = require('jsonwebtoken');
const mongoose = require('mongoose');
const Note = require('../models/noteSchema'); 
const authenticateToken = require('../middleware/authMiddleware');
const router = express.Router();
const JWT_SECRET = process.env.JWT_SECRET;

router.post('/save-note', authenticateToken, async (req, res) => {
    const { title, content } = req.body;
    
    // Validate title and content
    if (!title || !content) {
      return res.status(400).json({ message: 'Title and content are required' });
    }
  
    try {
      // Create the note with the userId from the token
      const newNote = new Note({
        title,
        content,
        userId: req.userId, // Associate the note with the authenticated user
      });
      
      // Save the note to the database
      await newNote.save();
  
      // Send response
      res.status(201).json({
        message: 'Note saved successfully',
        note: newNote,
      });
    } catch (error) {
      console.error('Error saving note:', error);
      res.status(500).json({ message: 'Server error while saving note.' });
    }
});

router.get('/get-notes', authenticateToken, async (req, res) => {
    try {
      // Find notes associated with the userId (from token)
      const notes = await Note.find({ userId: req.userId });
  
      if (!notes) {
        return res.status(404).json({ message: 'No notes found for this user' });
      }
  
      res.status(200).json({ notes });
    } catch (error) {
      console.error('Error fetching notes:', error);
      res.status(500).json({ message: 'Server error while fetching notes' });
    }
  });

module.exports = router;
