const crypto = require('crypto');

module.exports = function(req, res, next) {
  const apiKey = req.header('x-api-key');

  if (!apiKey) {
    return res.status(401).json({ msg: 'No API key, authorization denied' });
  }

  try {
    const adminKey = process.env.ADMIN_API_KEY || '';

    // Use SHA256 to normalize buffer lengths to exactly 32 bytes before comparing.
    // This prevents timing attacks while avoiding the algorithmic DoS vulnerability
    // of synchronous functions like crypto.scryptSync.
    const keyHash = crypto.createHash('sha256').update(apiKey).digest();
    const adminHash = crypto.createHash('sha256').update(adminKey).digest();

    if (crypto.timingSafeEqual(keyHash, adminHash)) {
      next();
    } else {
      res.status(401).json({ msg: 'Invalid API key' });
    }
  } catch (err) {
    res.status(500).json({ msg: 'Server Error during authentication' });
  }
};
