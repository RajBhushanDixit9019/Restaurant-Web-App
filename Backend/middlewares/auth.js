// middleware/auth.js
const jwt = require('jwt-simple');
const { JWT_SECRET } = process.env;

const authenticateJWT = (req, res, next) => {
  const token = req.headers['authorization']?.split(' ')[1]; // Bearer token
  
  if (!token) {
    return res.status(403).send('Token is required');
  }
  
  try {
    const decoded = jwt.decode(token, JWT_SECRET);
    req.user = decoded; // Attach user info to the request
    next();
  } catch (err) {
    return res.status(403).send('Invalid or expired token');
  }
};

module.exports = { authenticateJWT };
