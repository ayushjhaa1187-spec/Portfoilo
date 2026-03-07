const crypto = require('crypto');

module.exports = function(req, res, next) {
  // Get token from header
  const apiKey = req.header('x-api-key');

  // Check if no token
  if (!apiKey) {
    return res.status(401).json({ msg: 'No token, authorization denied' });
  }

  try {
    const adminKey = process.env.ADMIN_API_KEY;

    if (!adminKey) {
        console.error('ADMIN_API_KEY is not set in environment variables');
        return res.status(500).json({ msg: 'Server Configuration Error' });
    }

    // Normalize buffer lengths to prevent timing attacks while avoiding algorithmic DoS
    const providedBuffer = crypto.createHash('sha256').update(String(apiKey)).digest();
    const expectedBuffer = crypto.createHash('sha256').update(String(adminKey)).digest();

    if (crypto.timingSafeEqual(providedBuffer, expectedBuffer)) {
      next();
    } else {
      res.status(401).json({ msg: 'Token is not valid' });
    }
  } catch (err) {
    console.error('Something went wrong with auth middleware');
    res.status(500).json({ msg: 'Server Error' });
  }
};
