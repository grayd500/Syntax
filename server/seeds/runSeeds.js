const db = require('../config/connection');
// Models
const { Album, Event, Merch, User } = require('../models');
// Seeds
const seedAlbums = require('./albumSeed');
const seedEvents = require('./eventSeed');
const seedMerch = require('./merchSeed');
const seedUser = require('./userSeed');

db.once('open', async () => {
  try {
    await Album.deleteMany({});
    await Event.deleteMany({});
    await Merch.deleteMany({});
    await User.deleteMany({});

    
    await Album.insertMany(seedAlbums);
    await Event.insertMany(seedEvents);
    await Merch.insertMany(seedMerch);
    await User.insertMany(seedUser);

  } catch (err) {
    console.log(err);
    process.exit(1);
  }

  console.log('all done!');
  process.exit(0);
});

