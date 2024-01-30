// server/seeds/runSeeds.js:
require('dotenv').config();
const db = require('../config/connection');

// Models
const { Album, Event, Merch, User } = require('../models');
// Seeds
const seedAlbums = require('./albumSeed');
const seedEvents = require('./eventSeed');
const seedMerch = require('./merchSeed');

db.once('open', async () => {
  try {
    await Album.deleteMany({});
    await Event.deleteMany({});
    await Merch.deleteMany({});
    await Album.insertMany(seedAlbums);
    await Event.insertMany(seedEvents);
    await Merch.insertMany(seedMerch);
  } catch (err) {
    process.exit(1);
  }

  process.exit(0);
});
