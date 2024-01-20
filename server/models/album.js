const mongoose = require('mongoose');

const albumSchema = new mongoose.Schema({
  title: { type: String, required: true },
  artist: { type: String, required: true },
  releaseDate: Date,
  genre: String,
  tracklist: [
    {
      trackNumber: Number,
      title: String,
    },
  ],
});

module.exports = mongoose.model('Album', albumSchema);
