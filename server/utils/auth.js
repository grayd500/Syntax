// server/utils/auth.js:
const { GraphQLError } = require("graphql");
const jwt = require("jsonwebtoken");

const secret = "secret";
const expiration = "2h";
// middleware to extract token from incoming request
const authMiddleWare = function ({ req }) {
  console.log('call auth middleware')
    // grab token from header
  let token = req.headers.authorization;
  // split token string
  if (req.headers.authorization) {
    token = token.split(" ").pop().trim();
  }
  console.log('token', token)
  // if no token, return the request-
  if (!token) {
    return req;
  }
  // if token found verify using the jwt package
  try {
    const { data } = jwt.verify(token, secret, { maxAge: expiration });
    req.user = data;
  } catch {
    console.log("Invalid token");
  }
  // return the request with the decoded token on the request body as a user property
  return req;
};
// function to sign a token (aka sign up, login)
const signToken = function ({ email, username, _id }) {
  // sign the token with the parameters and secret
  const payload = { email, username, _id };
  return jwt.sign({ data: payload }, secret, { expiresIn: expiration });
};
// export function to use in our app
module.exports = {
  authMiddleWare,
  signToken,
};
