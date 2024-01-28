const bcrypt = require('bcryptjs');

const hashPassword = async (password) => {
  return await bcrypt.hash(password, 10);
};

const seedUsers = async () => {
  return [
    {
      username: 'CimarronJ',
      password: await hashPassword('Cimarron123'),
      firstName: 'Cimarron',
      lastName: 'Jenschke',
      email: 'cimarron@syntaxband.com',
      isAdmin: true,
    },
    {
      username: 'Fanboi',
      password: await hashPassword('Fanboi123'),
      firstName: 'Buck',
      lastName: 'Naked',
      email: 'buck321@gmail.com',
      isAdmin: false,
    },
    {
      username: 'DerekM',
      password: await hashPassword('Derek123'),
      firstName: 'Derek',
      lastName: 'Modugno',
      email: 'derek@syntaxband.com',
      isAdmin: true,
    },
  ];
};

module.exports = seedUsers();