const crypto = require('crypto');

module.exports = function (req, res, next) {
  // Get API key from header
  const apiKey = req.header('x-api-key');

  // Check if no key
  if (!apiKey) {
    return res.status(401).json({ msg: 'No API key, authorization denied' });
  }

  try {
    const adminKey = process.env.ADMIN_API_KEY;

    if (!adminKey) {
      console.error('ADMIN_API_KEY is not defined in environment variables');
      return res.status(500).json({ msg: 'Server configuration error' });
    }

    // Normalize buffer lengths with SHA-256 to prevent timing attacks
    // while avoiding the algorithmic DoS vulnerability of scryptSync
    const providedHash = crypto.createHash('sha256').update(apiKey).digest();
    const expectedHash = crypto.createHash('sha256').update(adminKey).digest();

    if (crypto.timingSafeEqual(providedHash, expectedHash)) {
      next();
    } else {
      res.status(401).json({ msg: 'API key is not valid' });
    }
  } catch (err) {
    console.error('Auth middleware error:', err);
    res.status(500).json({ msg: 'Server Error' });
  }
};
