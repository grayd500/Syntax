// server/server.js
const path = require("path");
require("dotenv").config({ path: path.resolve(__dirname, "../.env") });
console.log("JWT_SECRET:", process.env.JWT_SECRET);
const jwt = require("jsonwebtoken");
const express = require("express");
const { ApolloServer } = require("@apollo/server");
const { expressMiddleware } = require("@apollo/server/express4");
const https = require("https"); // Import the HTTPS module
const fs = require("fs");

// Import authMiddleWare and adminAuthMiddleware
const { authMiddleWare, signToken, adminAuthMiddleware } = require('./utils/auth');;

const { typeDefs, resolvers } = require("./schemas");
const db = require("./config/connection");

const PORT = process.env.PORT || 3001;
const app = express();

// ApolloServer configuration
const server = new ApolloServer({
  typeDefs,
  resolvers,
});

// HTTPS setup for local development
const httpsOptions = {
  key: fs.readFileSync(path.join(__dirname, "../certs/key.pem")), // Path to your key.pem
  cert: fs.readFileSync(path.join(__dirname, "../certs/cert.pem")), // Path to your cert.pem
};

// Starting Apollo Server function
const startApolloServer = async () => {
  await server.start();

  app.use(express.urlencoded({ extended: false }));
  app.use(express.json());

  // Apollo Server middleware
  app.use(
    "/graphql",
    expressMiddleware(server, {
      path: "/", // configure graphql to use authMiddleware function
      context: authMiddleWare,
    })
  );

  // Example Admin-Only Route for deleting comments
  // This route uses both authMiddleWare and adminAuthMiddleware
  // Ensure that only authenticated admins can access this route
  app.delete('/api/admin/delete-comment/:commentId', authMiddleWare, adminAuthMiddleware, (req, res) => {
    // Add logic to handle comment deletion here
    // Retrieve commentId from req.params
    const { commentId } = req.params;
    // Perform deletion logic, and then send a response
    // This is just a placeholder response. Update it according to your deletion logic.
    res.send(`Admin deleted comment with ID: ${commentId}`);
  });

  // Serve static files in production
  if (process.env.NODE_ENV === "production") {
    app.use(express.static(path.join(__dirname, "../client/dist")));

    app.get("*", (req, res) => {
      res.sendFile(path.join(__dirname, "../client/dist/index.html"));
    });
  }

  // Database connection and server start
  db.once("open", () => {
    https.createServer(httpsOptions, app).listen(PORT, () => {
      console.log(`HTTPS server running on port ${PORT}!`);
      console.log(`Use GraphQL at https://localhost:${PORT}/graphql`);
    });
  });
};

// Initialize the server
startApolloServer();

module.exports = { startApolloServer };
