const path = require("path");
require("dotenv").config({ path: path.resolve(__dirname, "../.env") });

// Debugging: Log all environment variables
console.log("Environment Variables:", process.env);

// Check if JWT_SECRET is defined
if (!process.env.JWT_SECRET) {
  console.error("JWT_SECRET is not defined in the .env file");
  process.exit(1); // Exit the process
}

const jwt = require("jsonwebtoken");
const express = require("express");
const { ApolloServer } = require("@apollo/server");
const { expressMiddleware } = require("@apollo/server/express4");
const https = require("https"); // Import the HTTPS module
const fs = require("fs");
const { authMiddleWare } = require('./utils/auth');
const { typeDefs, resolvers } = require("./schemas");
const db = require("./config/connection");

const PORT = process.env.PORT || 3001;
const app = express();

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

// HTTPS setup for local development
const httpsOptions = {
  key: fs.readFileSync(path.join(__dirname, "../certs/key.pem")), // Path to your key.pem
  cert: fs.readFileSync(path.join(__dirname, "../certs/cert.pem")), // Path to your cert.pem
};

const startApolloServer = async () => {
  await server.start();

  app.use(express.urlencoded({ extended: false }));
  app.use(express.json());

  app.use(
    "/graphql",
    expressMiddleware(server, {
      path: "/",
      context: authMiddleWare,
    })
  );

  if (process.env.NODE_ENV === "production") {
    app.use(express.static(path.join(__dirname, "../client/dist")));

    app.get("*", (req, res) => {
      res.sendFile(path.join(__dirname, "../client/dist/index.html"));
    });
  }

  db.once("open", () => {
    app.listen(PORT, () => {
      console.log(`HTTPS server running on port ${PORT}!`);
      console.log(`Use GraphQL at https://localhost:${PORT}/graphql`);
    });
  });
};

startApolloServer();

module.exports = { startApolloServer };
