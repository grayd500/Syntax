const { gql } = require('apollo-server');

const typeDefs = gql`
  type Event {
    _id: ID
    title: String
    date: String
    city: String
    state: String
    venue: String
    description: String
    ticketLink: String
  }
  type Album {
    _id: ID
    title: String
    Artist: String
    releaseDate: String
    genre: String
    tracklist: [Track]
  }

  type Track {
    trackNumber: Int
    title: String
  }

  type Query {
    events: [Event]
  }
`;

module.exports = typeDefs;
