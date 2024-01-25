// server/schemas/resolver.js:
const Event = require('../models/event');
const Album = require('../models/album');
const Merch = require('../models/merch');
const User = require('../models/user');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

// import signToken method to create token
const { signToken } = require('../utils/auth');

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
    // Example of a protected query
    protectedData: async (parent, args, context) => {
      if (!context.user) {
        throw new Error('Not authenticated');
      }
      
      return "This data is protected and you are authenticated to see it";
    },
    // Add other queries as necessary
  },
  Mutation: {
    login: async (parent, { input }) => {
      console.log('string- login resolver')
      const { username, password } = input;
      const user = await User.findOne({ username });
      if (!user) {
        throw new Error('User not found');
      }
      const passwordMatch = await bcrypt.compare(password, user.password);
      if (!passwordMatch) {
        throw new Error('Invalid password');
      }
      console.log('login', user)
     
      // Refactored to include isAdmin in the token
      const token = signToken({
        email: user.email,
        username: user.username,
        _id: user._id,
        isAdmin: user.isAdmin
      });
      return {
        token,
        user,
      };
    },
    register: async (parent, { input }) => {
      const { username, password, firstName, lastName, email } = input;
      const existingUser = await User.findOne({ username });
      if (existingUser) {
        throw new Error('Username is already taken');
      }
      const hashedPassword = await bcrypt.hash(password, 10);
      const newUser = new User({
        username,
        password: hashedPassword,
        firstName,
        lastName,
        email,
      // Best Practice for isAdmin flag:
        // By default, all new users should not have admin privileges. This is crucial for maintaining
        // the security and integrity of your application. The isAdmin flag should be set to false 
        // when new users register. Admin privileges should only be granted through a secure internal process,
        // typically performed by a site administrator or through a secure admin panel.
        // This approach ensures that only authorized personnel have access to admin-level functionalities.
        isAdmin: false, // Set to false by default for all new registrations
      });
      await newUser.save();
  
      // Updated to use the signToken function
      const token = signToken({
        email: newUser.email,
        username: newUser.username,
        _id: newUser._id,
        isAdmin: newUser.isAdmin // isAdmin is set in the User model
      });
      return {
        token,
        user: newUser,
      };
    },
    // Add other mutations as necessary
  },  
};

module.exports = resolvers;