const mongoose = require('mongoose');

const albumSchema = new mongoose.Schema({
  title: { type: String, required: true },
  releaseDate: Date,
  tracklist: [
    {
      trackNumber: Number,
      title: String,
    },
  ],
});

module.exports = mongoose.model('Album', albumSchema);
