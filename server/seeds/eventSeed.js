const Event = require('../models/event');

const eventSeedData = [
  {
    title: 'Digital Dreamscape Festival',
    date: new Date('2024-06-12'),
    city: 'Austin',
    state: 'Texas',
    venue: 'Zilker Park',
    description: 'Festival for the coding professionals.',
    ticketLink: 'https://frontgatetickets.com',
  },
  {
    title: 'Album Release Party',
    date: new Date('2024-08-24'),
    city: 'Austin',
    state: 'Texas',
    venue: 'Emos East',
    description: 'Celebrate the release of our upcoming album.',
    ticketLink: 'https://frontgatetickets.com',
  },
];

async function seedEvents() {
  await Event.deleteMany({});
  await Event.insertMany(eventSeedData);
  console.log('Events seeded!');
}

module.exports = seedEvents;
