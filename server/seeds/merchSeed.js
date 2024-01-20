const Merch = require('../models/merch');

const merchSeedData = [
  {
    title: 'Band Logo Shirt',
    description: 'A comfortable and stylish T-shirt for coding enthusiasts.',
    price: 20.0,
    imageUrl: '../images/Logo_Transparent.png',
    category: 'T-Shirts',
    size: 'Large',
  },
  {
    title: 'Band Logo Poster',
    description: '36x24 Wall Poster',
    price: 10.0,
    imageUrl: '../images/Logo_Transparent.png',
    category: 'Posters',
  },
  {
    title: 'Band Logo Sticker',
    description: 'High-quality coding sticker for your laptop',
    price: 5.0,
    imageUrl: '../images/Logo_Transparent.png',
    category: 'Stickers',
  },
  {
    title: 'Syntax',
    description: 'Our self titled debut album',
    price: 15.0,
    imageUrl: '../images/Album_SelfTitled.png',
    category: 'Albums',
  },
  {
    title: 'System Error',
    description: 'Second album',
    price: 15.0,
    imageUrl: '../images/Album_SystemError.png',
    category: 'Albums',
  },
];

async function seedMerch() {
  await Merch.deleteMany({});
  await Merch.insertMany(merchSeedData);
  console.log('Merch seeded!');
}

module.exports = seedMerch;
