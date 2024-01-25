// server/schemas/resolvers.js:
const Event = require('../models/event');
const Album = require('../models/album');
const Merch = require('../models/merch');
const User = require('../models/user');
const bcrypt = require('bcryptjs');

// Importing the utility to sign JWTs
const { signToken } = require('../utils/auth');

const resolvers = {
  // Existing query resolvers...
  Query: {
  },

  // Mutation resolvers
  Mutation: {
    // User login resolver
    login: async (parent, { input }) => {
      console.log('string- login resolver');
      const { username, password } = input;

      // Finding the user in the database
      const user = await User.findOne({ username });
      if (!user) {
        throw new Error('User not found');
      }

      // Checking if password matches
      const passwordMatch = await bcrypt.compare(password, user.password);
      if (!passwordMatch) {
        throw new Error('Invalid password');
      }

      console.log('login', user);

      // If login is successful, signing the JWT token
      const token = signToken({
        email: user.email,
        username: user.username,
        _id: user._id,
        isAdmin: user.isAdmin  // Including isAdmin flag in the token
      });

      // Returning the token and user information
      return {
        token,
        user,
      };
    },

    // User registration resolver
    register: async (parent, { input }) => {
      const { username, password, firstName, lastName, email } = input;

      // Checking if username is already taken
      const existingUser = await User.findOne({ username });
      if (existingUser) {
        throw new Error('Username is already taken');
      }

      // Hashing the password before storing it
      const hashedPassword = await bcrypt.hash(password, 10);
      const newUser = new User({
        username,
        password: hashedPassword,
        firstName,
        lastName,
        email,
        isAdmin: false  // Setting isAdmin to false by default
      });

      await newUser.save();

      // Signing the JWT token for the new user
      const token = signToken({
        email: newUser.email,
        username: newUser.username,
        _id: newUser._id,
        isAdmin: newUser.isAdmin
      });

      // Returning the token and new user information
      return {
        token,
        user: newUser,
      };
    },

    // Admin-only mutation to delete a comment
    deleteComment: async (parent, { commentId }, context) => {
      // Checking if the user is authenticated and is an admin
      if (!context.user || !context.user.isAdmin) {
        throw new Error("Unauthorized! Only admins can perform this action.");
      }

      // Implement the logic to delete the comment here
      // For example, find the comment by commentId and delete it
      // const deletedComment = await CommentModel.findByIdAndDelete(commentId);

      // Assuming deletion is successful, returning a success response
      return {
        success: true,
        message: "Comment deleted successfully."
      };
    },

    // ... Add other mutations as needed
  },

  // ... Add other types of resolvers if needed
};

module.exports = resolvers;
