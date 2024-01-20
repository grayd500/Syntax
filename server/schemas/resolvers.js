const Event = require('../models/event');
const resolvers = {
  Query: {
    events: async () => {
      return await Event.find({});
    },
  },
};

module.exports = resolvers;
