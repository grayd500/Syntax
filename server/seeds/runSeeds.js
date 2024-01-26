const db = require('../config/connection');
// Models
const { Album, Event, Merch, User } = require('../models');
// Seeds
const seedUser = require('./userSeed');
const seedAlbums = require('./albumSeed');
const seedEvents = require('./eventSeed');
const seedMerch = require('./merchSeed');

db.once('open', async () => {
  try {
    await User.deleteMany({});
    await Album.deleteMany({});
    await Event.deleteMany({});
    await Merch.deleteMany({});

    await User.create(seedUser);
    await Album.create(seedAlbums);
    await Event.create(seedEvents);
    await Merch.create(seedMerch);

  } catch (err) {
    console.log(err);
    process.exit(1);
  }

  console.log('all done!');
  process.exit(0);
});

