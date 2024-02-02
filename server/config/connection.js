// server/config/connection.js:
const mongoose = require('mongoose');

const connectionString = process.env.MONGODB_URI;

if (!connectionString) {
  console.error('MONGODB_URI not specified in environment');
  process.exit(1);
}

mongoose.connect(connectionString, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

module.exports = mongoose.connection;
