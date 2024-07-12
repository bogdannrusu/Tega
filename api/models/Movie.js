// models/Movie.js
const mongoose = require('mongoose');

const movieSchema = new mongoose.Schema({
  title: String,
  genre: String,
  director: String,
  releaseYear: Number,
});

module.exports = mongoose.model('Movie', movieSchema);
