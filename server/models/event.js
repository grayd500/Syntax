const { Schema, model } = require('mongoose');

const eventSchema = new Schema({
  date: {
    type: String,
    required: true,
  },
  location: {
    type: String,
    required: true,
  },
  venue: {
    type: String,
    required: true,
  },
  description: {
    type: String,
  },
  ticket: {
    type: String,
  },
});

const Event = model('Event', eventSchema);

module.exports = Event;
