// server/utils/auth.js:
const jwt = require("jsonwebtoken");

// Secret key for JWT signing and expiration time
const secret = "secret"; // Ensure to keep your secret key safe
const expiration = "2h";

// Middleware to extract token from incoming request
const authMiddleWare = function ({ req }) {
    console.log('call auth middleware')
    // Grab token from header
    let token = req.headers.authorization;
    // Split token string
    if (req.headers.authorization) {
        token = token.split(" ").pop().trim();
    }
    console.log('token', token)
    // If no token, return the request
    if (!token) {
        return req;
    }
    // If token found, verify using the jwt package
    try {
        const { data } = jwt.verify(token, secret, { maxAge: expiration });
        req.user = data;
    } catch {
        console.log("Invalid token");
    }
    // Return the request with the decoded token on the request body as a user property
    return req;
};

// Function to sign a token (for signup, login)
const signToken = function ({ email, username, _id, isAdmin }) {
    // Sign the token with the parameters and secret
    const payload = { email, username, _id, isAdmin };
    return jwt.sign({ data: payload }, secret, { expiresIn: expiration });
};

// Admin authorization middleware
const adminAuthMiddleware = function (req, res, next) {
    // Check if the user is authenticated and is an admin
    if (!req.user || !req.user.isAdmin) {
        // If not an admin, send a 403 forbidden response
        return res.status(403).send("Access denied. Admin privileges required.");
    }
    // If the user is an admin, proceed to the next middleware
    next();
};

// Export functions to use in the application
module.exports = {
    authMiddleWare,
    signToken,
    adminAuthMiddleware, // Exporting adminAuthMiddleware
};

