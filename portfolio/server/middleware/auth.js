const dotenv = require('dotenv');

dotenv.config();

const auth = (req, res, next) => {
  const apiKey = req.header('x-api-key');

  // Check if no API key
  if (!apiKey) {
    return res.status(401).json({ msg: 'No API key, authorization denied' });
  }

  // Verify API key
  if (apiKey !== process.env.ADMIN_API_KEY) {
    return res.status(401).json({ msg: 'Invalid API key' });
  }

  next();
};

module.exports = auth;
