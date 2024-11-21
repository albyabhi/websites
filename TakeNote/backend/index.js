const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const authRoutes = require('./Routes/AuthRoutes');
const NoteRoutes = require('./Routes/NoteRoutes');
const cors = require('cors');

// Initialize app
const app = express();

// Middleware to enable CORS
app.use(cors());

// Load environment variables
dotenv.config();

// Middleware to parse JSON
app.use(express.json());

// Define a port
const PORT = process.env.PORT || 5000;

// Use auth routes
app.use('/auth', authRoutes); // This means signup will be at '/auth/signup'
app.use('/note', NoteRoutes);  // This means save-note will be at '/note/save-note'

// Connect to MongoDB and start the server
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
    console.log('Connected to MongoDB');
  })
  .catch((error) => {
    console.log('Error connecting to MongoDB:', error);
  });
