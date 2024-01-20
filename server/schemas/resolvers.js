const Event = require('../models/event');
const Album = require('../models/album');
const resolvers = {
  Query: {
    events: async () => {
      return await Event.find({});
    },
  },
};

module.exports = resolvers;
