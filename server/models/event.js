const mongoose = require('mongoose');

const eventSchema = new mongoose.Schema({
  date: { type: Date, required: true },
  location: { type: String, required: true },
  venue: { type: String, required: true },
  description: { type: String },
  ticket: { type: String },
});

module.exports = mongoose.model('Event', eventSchema);
