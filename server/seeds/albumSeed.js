const Album = require('../models/album');

const albumSeedData = [
  {
    title: 'Syntax',
    releaseDate: new Date('2020-07-31'),
    tracklist: [
      { trackNumber: 1, title: 'APIs in the Afternoon' },
      { trackNumber: 2, title: 'Git Grooves' },
      { trackNumber: 3, title: 'Angular Anthem' },
      { trackNumber: 4, title: 'Dancing in the Data Stream' },
      { trackNumber: 5, title: 'Whispers in the Web' },
    ],
  },
  {
    title: 'Debugging the Beats',
    releaseDate: new Date('2021-12-31'),
    tracklist: [
      { trackNumber: 1, title: 'Bootstrap Boogie' },
      { trackNumber: 2, title: 'MERN Melody' },
      { trackNumber: 3, title: 'Framework Funk' },
      { trackNumber: 4, title: 'Cache Me If You Can' },
      { trackNumber: 5, title: 'Infinite Loop of Desire' },
    ],
  },
  {
    title: 'Neon Mountains',
    releaseDate: new Date('2022-05-10'),
    tracklist: [
      { trackNumber: 1, title: 'Looping on Your Love' },
      { trackNumber: 2, title: 'Binary Beat of Love' },
      { trackNumber: 3, title: 'Recursive Romance' },
    ],
  },
  {
    title: 'System Error',
    releaseDate: new Date('2024-01-10'),
    tracklist: [
      { trackNumber: 1, title: 'Byte Me Tender' },
      { trackNumber: 2, title: 'Catch My Exceptions' },
      { trackNumber: 3, title: 'Romantic Runtime' },
      { trackNumber: 4, title: 'Loop of Love' },
      { trackNumber: 5, title: 'Syntax Error in My Heart' },
    ],
  },
];

async function seedAlbums() {
  await Album.deleteMany({});
  await Album.insertMany(albumSeedData);
  console.log('Albums seeded!');
}

module.exports = seedAlbums;
