const express = require('express');
const axios = require('axios');
const cors = require('cors');
require('dotenv').config();

const app = express();
const PORT = 5000;

// Enable CORS for the frontend to access this backend
app.use(cors());

// Route to get live football data
app.get('/api/matches', async (req, res) => {
  try {
    const response = await axios.get('https://api-football.com/fixtures', {
      headers: { 'x-auth-token': process.env.FOOTBALL_API_KEY }
    });
    res.json(response.data);
  } catch (error) {
    res.status(500).json({ error: 'Error fetching data' });
  }
});



app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
