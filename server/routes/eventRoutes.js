const express = require('express');
const router = express.Router();
const Event = require('../models/event'); // Import your Mongoose model

// Define a route to handle adding a new event
router.post('/add-event', async (req, res) => {
  try {
    // Extract event data from the request body
    const { description, date, location, venue, ticket } = req.body;

    // Create a new event document using the Mongoose model
    const newEvent = new Event({
      description,
      date,
      location,
      venue,
      ticket: ticket, // Ensure field name matches your Mongoose model
    });

    // Save the new event to the database
    await newEvent.save();

    // Send a success response
    res.status(201).json({ message: 'Event added successfully' });
  } catch (error) {
    // Handle any errors and send an error response
    console.error(error);
    res.status(500).json({ error: 'An error occurred while adding the event' });
  }
});

// Define other event-related routes as needed

module.exports = router;
