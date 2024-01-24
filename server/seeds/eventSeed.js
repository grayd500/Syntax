const Event = require('../models/event');

const eventSeedData = [
  {
    date: new Date('2024-06-12'),
    location: 'Austin, Texas',
    venue: 'Zilker Park',
    description: 'Digital Dreamscape Festival',
    ticket: 'https://frontgatetickets.com',
  },
  {
    date: new Date('2024-06-24'),
    location: 'Austin, Texas',
    venue: 'Emos East',
    description: 'Album Release Party.',
    ticket: 'https://frontgatetickets.com',
  },
  {
    date: new Date('2024-06-27'),
    location: 'Luckenbach, Texas',
    venue: 'Luckenbach Dance Hall',
    description: 'Live at historic Luckenback',
    ticket: 'https://frontgatetickets.com',
  },
  {
    date: new Date('2024-06-29'),
    location: 'Terlingua, Texas',
    venue: 'Starlight Theatre',
    description: 'Live in The Desert',
    ticket: 'https://frontgatetickets.com',
  },
  {
    date: new Date('2024-07-3'),
    location: 'Albuquerque, New Mexico',
    venue: 'Albuquerque Convention Center',
    description: 'Developer Conference',
    ticket: 'https://frontgatetickets.com',
  },
  {
    date: new Date('2024-07-7'),
    location: 'Los Angeles, California',
    venue: 'Viper Room',
    description: 'Retro Night',
    ticket: 'https://frontgatetickets.com',
  },
  {
    date: new Date('2024-07-9'),
    location: 'Los Angeles, California',
    venue: 'Dodger Stadium',
    description: 'Stay after the game for concert',
    ticket: 'https://frontgatetickets.com',
  },
  {
    date: new Date('2024-07-13'),
    location: 'Dufur, Oregon',
    venue: 'Wolf Run Ranch',
    description: 'What The Festival',
    ticket: 'https://frontgatetickets.com',
  },
  {
    date: new Date('2024-07-20'),
    location: 'Portland, Oregon',
    venue: 'The Fields Park',
    description: 'Portland Craft Beer Festival',
    ticket: 'https://frontgatetickets.com',
  },
  {
    date: new Date('2024-07-24'),
    location: 'Seattle, Washington',
    venue: 'Bite of Seattle',
    description: 'Bite of Seattle Food and Musical Festival',
    ticket: 'https://frontgatetickets.com',
  },
];

async function seedEvents() {
  await Event.deleteMany({});
  await Event.insertMany(eventSeedData);
  console.log('Events seeded!');
}

module.exports = seedEvents;
