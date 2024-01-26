// server/models/user.js:
const { Schema, model } = require('mongoose');

const userSchema = new Schema({
  username: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  },
  firstName: {
    type: String
  },
  lastName: {
    type: String
  },
  email: {
    type: String
  },
  isAdmin: {
    type: Boolean,
    default: false
  },
});

const User = model('User', userSchema);

module.exports = User;
