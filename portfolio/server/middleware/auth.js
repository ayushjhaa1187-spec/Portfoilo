const crypto = require('crypto');

module.exports = function(req, res, next) {
  // Get token from header
  const apiKey = req.header('x-api-key');

  // Check if no token
  if (!apiKey) {
    return res.status(401).json({ msg: 'No token, authorization denied' });
  }

  // Verify token
  try {
    const adminApiKey = process.env.ADMIN_API_KEY;

    if (!adminApiKey) {
      console.error('ADMIN_API_KEY is not configured on the server');
      return res.status(500).json({ msg: 'Server configuration error' });
    }

    // Use crypto.timingSafeEqual to prevent timing attacks
    // First, hash both values to ensure they are the same length
    const a = crypto.createHash('sha256').update(apiKey).digest();
    const b = crypto.createHash('sha256').update(adminApiKey).digest();

    if (crypto.timingSafeEqual(a, b)) {
      next();
    } else {
      res.status(401).json({ msg: 'Token is not valid' });
    }
  } catch (err) {
    console.error('Something went wrong with auth middleware', err);
    res.status(500).json({ msg: 'Server Error' });
  }
};
