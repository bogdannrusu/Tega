// server.js
const express = require('express');
const mongoose = require('mongoose');
const Movie = require('./models/Movie');
const User = require('./models/User');

const app = express();
const port = 3000;

// Replace with your MongoDB connection string
const dbUri = 'mongodb+srv://userBRS:Ban4ever@clustermain.vpwp2eh.mongodb.net/movie';

// Connect to MongoDB with improved error handling
mongoose.connect(dbUri, { serverSelectionTimeoutMS: 5000 })
  .then(() => console.log('MongoDB connected...'))
  .catch(err => console.error('MongoDB connection error:', err));

// Middleware to parse JSON
app.use(express.json());

// Handle connection errors after initial connection
mongoose.connection.on('error', err => {
  console.error('MongoDB error:', err);
});

// Route to get all movies
app.get('/movies', async (req, res) => {
  try {
    const movies = await Movie.find();
    res.json(movies);
  } catch (err) {
    res.status(500).send(err.message);
  }
});

// Route to get all users
app.get('/users', async (req, res) => {
  try {
    const users = await User.find();
    res.json(users);
  } catch (err) {
    res.status(500).send(err.message);
  }
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
