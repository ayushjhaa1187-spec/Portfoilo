const crypto = require('crypto');

module.exports = function (req, res, next) {
  // Get API key from header
  const apiKey = req.header('x-api-key');
  const adminApiKey = process.env.ADMIN_API_KEY;

  // Check if no key
  if (!apiKey) {
    return res.status(401).json({ msg: 'No API key, authorization denied' });
  }

  // Check if admin key is configured
  if (!adminApiKey) {
    console.error('Security Alert: ADMIN_API_KEY is not configured');
    return res.status(500).json({ msg: 'Server configuration error' });
  }

  try {
    // Hash keys to normalize length and prevent timing attacks
    // using SHA-256 instead of synchronous scrypt to prevent algorithmic DoS
    const expectedHash = crypto.createHash('sha256').update(adminApiKey).digest();
    const providedHash = crypto.createHash('sha256').update(apiKey).digest();

    if (crypto.timingSafeEqual(expectedHash, providedHash)) {
      next();
    } else {
      res.status(401).json({ msg: 'Invalid API key' });
    }
  } catch (err) {
    console.error('Auth middleware error:', err);
    res.status(500).json({ msg: 'Server Error' });
  }
};
