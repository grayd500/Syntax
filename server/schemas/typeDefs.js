const { gql } = require('apollo-server');

const typeDefs = gql`
  type Event {
    _id: ID
    date: String!
    location: String!
    venue: String!
    description: String
    ticket: String
  }

  type Album {
    _id: ID
    title: String!
    releaseDate: String!
    tracklist: [Track]
  }

  type Track {
    trackNumber: Int
    title: String
  }

  type Merch {
    _id: ID!
    title: String!
    description: String!
    price: Float!
    imageUrl: String!
    category: String!
    size: String
  }

  type User {
    _id: ID
    username: String!
    password: String!
    firstName: String
    lastName: String
    email: String
    isAdmin: Boolean
  }

  type AuthPayload {
    token: String
    user: User
  }

  input LoginInput {
    username: String!
    password: String!
  }

  input RegisterInput {
    username: String!
    password: String!
    firstName: String
    lastName: String
    email: String
  }

  type Query {
    events: [Event]
    albums: [Album]
    merch: [Merch]
    user: [User]
    protectedData: String
  }

  input EventInput {
    date: String!
    location: String!
    venue: String!
    description: String
    ticket: String
  }

  type Mutation {
    login(input: LoginInput): AuthPayload
    register(input: RegisterInput): AuthPayload
    addEvent(input: EventInput): Event
    updateEvent(id: ID!, input: EventInput): Event
    deleteEvent(id: ID!): String
  }
`;

module.exports = typeDefs;
