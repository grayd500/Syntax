// server/schemas/resolvers.js:
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
    user: async () => {
      return await User.find({});
    },
    // Example of a protected query
    protectedData: async (parent, args, context) => {
      if (!context.user) {
        throw new Error('Not authenticated');
      }
      return 'This data is protected and you are authenticated to see it';
    },
    // Add other queries as necessary
  },
  Mutation: {
    login: async (parent, { input }) => {
      console.log('Login resolver:', input);
      const { username, password } = input;
      
      // Log - Before finding the user
      console.log(`Finding user with username: ${username}`);
      const user = await User.findOne({ username });
      if (!user) {
        throw new Error('User not found');
      }
      // Log - After finding the user
      console.log(`Found user: ${user.username}`);
    
      // Log - Before comparing password
      console.log(`Comparing password for user: ${user.username}`);
      const passwordMatch = await bcrypt.compare(password, user.password);
      // Log - After comparing password
      console.log(`Password match result for user ${user.username}: ${passwordMatch}`);
      if (!passwordMatch) {
        throw new Error('Invalid password');
      }
    
      const token = signToken(user);
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
      const newUser = new User({
        username,
        password,
        firstName,
        lastName,
        email,
      });
      await newUser.save();

      const token = jwt.sign({ userId: newUser._id }, process.env.JWT_SECRET, {
        expiresIn: '1h',
      });
      return {
        token,
        user: newUser,
      };
    },
    // Create Event - Any authenticated user
    addEvent: async (parent, { input }, context) => {
      if (!context.user) {
        throw new Error('Not authenticated');
      }
      const newEvent = new Event(input);
      await newEvent.save();
      return newEvent;
    },

    // Update Event - Only specific member
    updateEvent: async (parent, { id, input }, context) => {
      if (!context.user || !context.user.isAdmin) {
        // Assuming isAdmin flag determines the privileged user
        throw new Error('Not authorized');
      }
      const updatedEvent = await Event.findByIdAndUpdate(id, input, { new: true });
      if (!updatedEvent) {
        throw new Error('Event not found');
      }
      return updatedEvent;
    },

    // Delete Event - Only specific member
    deleteEvent: async (parent, { id }, context) => {
      if (!context.user || !context.user.isAdmin) {
        throw new Error('Not authorized');
      }
      const deletedEvent = await Event.findByIdAndDelete(id);
      if (!deletedEvent) {
        throw new Error('Event not found');
      }
      return 'Event deleted successfully';
    },
  },
};

module.exports = resolvers;



