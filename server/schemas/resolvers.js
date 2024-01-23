const Event = require('../models/event');
const Album = require('../models/album');
const Merch = require('../models/merch');
const User = require('../models/user');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const resolvers = {
  Query: {
    events: async () => {
      return await Event.find({});
    },
    albums: async () => {
      return await Album.find({});
    },
    merch: async () => {
      return await Merch.find({});
    },
  },
  Mutation: {
    login: async (parent, args, context) => {
      const { username, password } = args.input;
      const user = await User.findOne({ username });
      if (!user) {
        throw new Error('User not found');
      }
      const passwordMatch = await bcrypt.compare(password, user.password);
      if (!passwordMatch) {
        throw new Error('Invalid password');
      }
      const token = jwt.sign({ userId: user._id }, 'your-secret-key', {
        expiresIn: '1h',
      });

      return {
        token,
        user,
      };
    },
    register: async (parent, args, context) => {
      const existingUser = await user.findOne({ username });
      if (existingUser) {
        throw new Error('Username is already taken');
      }
      const hashedPassword = await bcrypt.hash(password, 10);
      const newUser = new user({
        username,
        password: hashedPassword,
        firstName,
        lastName,
        email,
      });
      await newUser.save();

      const token = jwt.sign({ userId: newUser._id }, 'your-secret-key', {
        expiresIn: '1h',
      });
      return {
        token,
        user: newUser,
      };
    },
  },
};

module.exports = resolvers;
