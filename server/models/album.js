const { Schema, model } = require('mongoose');

const albumSchema = new Schema({
  title: {
    type: String,
    required: true
  },
  releaseDate: Date,
  tracklist: [
    {
      trackNumber: Number,
      title: String,
    },
  ],
});

const Album = model('Album', albumSchema);

module.exports = Album;
