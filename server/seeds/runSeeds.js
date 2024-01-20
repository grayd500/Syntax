const mongoose = require('mongoose');
const seedEvents = require('./eventSeed');
const seedAlbums = require('./albumSeed');
const seedMerch = require('./merchSeed');

const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost/syntaxDB';

mongoose.connect(MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

async function runSeeds() {
  try {
    await seedEvents();
    await seedAlbums();
    await seedMerch();
    console.log('All seeds completed successfully!');
  } catch (err) {
    console.error('Error during seeding:', err.message);
  } finally {
    mongoose.disconnect();
  }
}
runSeeds();
