// server/schemas/typeDefs.js:
const { gql } = require('apollo-server');

const typeDefs = gql`
  scalar Date
  type Event {
    _id: ID
    date: Date
    location: String
    venue: String
    description: String
    ticket: String
  }
  type Album {
    _id: ID
    title: String
    releaseDate: Date
    tracklist: [Track]
  }

  type Track {
    trackNumber: Int
    title: String
  }

  type Merch {
    _id: ID
    title: String
    price: Float
    imageUrl: String
    category: String
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
    protectedData: String
  }
  type Mutation {
    login(input: LoginInput): AuthPayload
    register(input: RegisterInput): AuthPayload
    deleteComment(commentId: ID!): DeleteCommentResponse
  }
  type DeleteCommentResponse {
    success: Boolean!
    message: String
  }
`;

module.exports = typeDefs;
