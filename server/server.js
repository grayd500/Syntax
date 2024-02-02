const path = require('path');
require('dotenv').config({ path: path.resolve(__dirname, '../.env') });

// Check if JWT_SECRET is defined
if (!process.env.JWT_SECRET) {
  console.error('JWT_SECRET is not defined in the .env file');
  process.exit(1); // Exit the process
}

const jwt = require('jsonwebtoken');
const express = require('express');
const cors = require('cors'); // Include CORS
const { ApolloServer } = require('@apollo/server');
const { expressMiddleware } = require('@apollo/server/express4');
const https = require('https');
const fs = require('fs');
const { authMiddleWare } = require('./utils/auth');
const { typeDefs, resolvers } = require('./schemas');
const db = require('./config/connection');
const eventRoutes = require('./routes/eventRoutes');

const PORT = process.env.PORT || 3001;
const app = express();

// CORS configuration
const corsOptions = {
  origin: 'http://localhost:5173', // Replace with your local development environment URL
  optionsSuccessStatus: 200,
};

app.use(cors(corsOptions)); // Apply CORS middleware

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

const startApolloServer = async () => {
  await server.start();

  app.use(express.urlencoded({ extended: false }));
  app.use(express.json());
  app.use('/api', eventRoutes);

  app.use(
    '/graphql',
    expressMiddleware(server, {
      path: '/',
      context: authMiddleWare,
    })
  );

  if (process.env.NODE_ENV === 'production') {
    app.use(express.static(path.join(__dirname, '../client/dist')));

    app.get('*', (req, res) => {
      res.sendFile(path.join(__dirname, '../client/dist/index.html'));
    });

    db.once('open', () => {
      app.listen(PORT, () => {});
    });
  } else {
    const httpsOptions = {
      key: fs.readFileSync(path.join(__dirname, '../certs/key.pem')),
      cert: fs.readFileSync(path.join(__dirname, '../certs/cert.pem')),
    };

    db.once('open', () => {
      https.createServer(httpsOptions, app).listen(PORT, () => {});
    });
  }
};

startApolloServer();

module.exports = { startApolloServer };
