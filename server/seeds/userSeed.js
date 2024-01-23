
const User = require('../models/user');

const userSeedData = [
  {
    username: 'user1',
    password: 'password1',
    firstName: 'John',
    lastName: 'Doe',
    email: 'user1@example.com',
  },
  {
    username: 'user2',
    password: 'password2',
    firstName: 'Jane',
    lastName: 'Smith',
    email: 'user2@example.com',
  },
];

async function seedUser() {
  await User.deleteMany({});
  await User.insertMany(userSeedData);
  console.log('Users seeded!');
}

module.exports = seedUser;
