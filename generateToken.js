// generateToken.js:
const jwt = require('jsonwebtoken');
const fs = require('fs');
require('dotenv').config();

// Load the JWT_SECRET from the .env file
const jwtSecret = process.env.JWT_SECRET;

// Create a sample payload (you can customize this as needed)
const payload = {
  username: 'YourUsername',
  role: 'user',
};

// Generate the JWT token
const token = jwt.sign(payload, jwtSecret, { expiresIn: '1h' });

// Output the token

// Optionally, you can save the token to a file
fs.writeFileSync('generatedToken.txt', token, 'utf-8');
