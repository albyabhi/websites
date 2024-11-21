// server.js
const dotenv = require('dotenv');
const express = require('express');

const connectDB = require('./config/config');
const cors = require('cors');
const authRoutes = require('./src/Routes/authRoutes');
const DataRoutes = require('./src/Routes/DataAuth');



// Load environment variables
dotenv.config();

// Connect to the database
connectDB();

const app = express();

// Middleware
app.use(express.json());
app.use(cors());

// // Routes
app.use('/api/auth', authRoutes);
app.use('/api/Data', DataRoutes);
const path = require('path');

// Serve static files from the uploads directory
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));


app.get('/', (req, res) => {
    res.send('API is running...');
});

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
