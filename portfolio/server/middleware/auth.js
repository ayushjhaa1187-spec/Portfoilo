const crypto = require('crypto');

module.exports = function(req, res, next) {
  // Get token from header
  const apiKey = req.header('x-api-key');

  // Check if not token
  if (!apiKey) {
    return res.status(401).json({ msg: 'No token, authorization denied' });
  }

  try {
    const adminApiKey = process.env.ADMIN_API_KEY;

    if (!adminApiKey) {
      console.error('ADMIN_API_KEY environment variable is not set');
      return res.status(500).json({ msg: 'Server Configuration Error' });
    }

    // Hash both keys to ensure they are the same length before comparison.
    // This prevents timing attacks while avoiding the algorithmic DoS vulnerability
    // of synchronous functions like crypto.scryptSync.
    const expectedKeyHash = crypto.createHash('sha256').update(adminApiKey).digest();
    const providedKeyHash = crypto.createHash('sha256').update(apiKey).digest();

    if (!crypto.timingSafeEqual(expectedKeyHash, providedKeyHash)) {
      return res.status(401).json({ msg: 'Token is not valid' });
    }

    next();
  } catch (err) {
    console.error('Something went wrong with auth middleware', err);
    res.status(500).json({ msg: 'Server Error' });
  }
};
