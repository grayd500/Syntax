const jwt = require('jsonwebtoken');
const User = require('../models/user'); // Ensure this path is correct

const secret = process.env.JWT_SECRET; // Use the JWT_SECRET from your environment variables
const expiration = '2h';

// Middleware to extract and verify token from incoming request
const authMiddleWare = async ({ req }) => {
  // Grab token from header
  let token = req.headers.authorization;
  // Split token string and extract the token
  if (token) {
    token = token.split(' ')[1].trim();
  }

  // If no token, return the request without modification
  if (!token) {
    return { user: null };
  }

  // If token found, verify using the jwt package
  try {
    const decoded = jwt.verify(token, secret, { maxAge: expiration });
    const user = await User.findById(decoded.userId);

    // Attach user to the context if user exists
    if (user) {
      return { user };
    }
  } catch (error) {
    console.error('JWT Token Error:', error.message);
  }

  return { user: null };
};

// Function to sign a token (used for sign up, login)
const signToken = function ({ _id, email, username }) {
  // Sign the token with the user's details and secret
  const payload = { userId: _id, email, username };
  return jwt.sign(payload, secret, { expiresIn: expiration });
};

// Export functions for use in the application
module.exports = {
  authMiddleWare,
  signToken,
};
