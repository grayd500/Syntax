const mongoose = require('mongoose');

const eventSchema = new mongoose.Schema({
  title: { type: String, required: true },
  date: { type: Date, required: true },
  city: { type: String, required: true },
  state: { type: String, required: true },
  venue: { type: String, required: true },
  description: String,
  ticketLink: { type: String },
});

module.exports = mongoose.model('Event', eventSchema);
