// server/models/user.js:
const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  firstName: { type: String },
  lastName: { type: String },
  email: { type: String },
  isAdmin: { type: Boolean, default: false },
});

module.exports = mongoose.model('User', userSchema);
