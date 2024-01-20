const Event = require('../models/event');
const Album = require('../models/album');
const Merch = require('../models/merch');

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
};

module.exports = resolvers;
