const { Schema, model } = require('mongoose');

const merchSchema = new Schema({
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

const Merch = model('Merch', merchSchema);

module.exports = Merch;
