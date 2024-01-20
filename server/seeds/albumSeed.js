const Album = require('../models/album');

const albumSeedData = [
  {
    title: 'Syntax',
    artist: 'Syntax',
    releaseDate: new Date('2023-07-31'),
    genre: 'Rock',
    tracklist: [
      { trackNumber: 1, title: 'APIs in the Afternoon' },
      { trackNumber: 2, title: 'Git Grooves' },
      { trackNumber: 3, title: 'Angular Anthem' },
    ],
  },
  {
    title: 'Debugging the Beats',
    artist: 'Syntax',
    releaseDate: new Date('2023-12-31'),
    genre: 'Rock',
    tracklist: [
      { trackNumber: 1, title: 'Bootstrap Boogie' },
      { trackNumber: 2, title: 'MERN Melody' },
      { trackNumber: 3, title: 'Framework Funk' },
    ],
  },
];

async function seedAlbums() {
  await Album.deleteMany({});
  await Album.insertMany(albumSeedData);
  console.log('Albums seeded!');
}

module.exports = seedAlbums;
