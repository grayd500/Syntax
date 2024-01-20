const mongoose = require('mongoose');

const merchSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  imageUrl: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    enum: ['Posters', 'T-Shirts', 'Albums', 'Stickers', 'Other'],
    required: true,
  },
  size: {
    type: String,
  },
});

module.exports = mongoose.model('Merch', merchSchema);
