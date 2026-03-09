const crypto = require('crypto');

module.exports = function(req, res, next) {
  // Get token from header
  const token = req.header('x-api-key');

  // Check if no token
  if (!token) {
    return res.status(401).json({ msg: 'No token, authorization denied' });
  }

  try {
    const adminKey = process.env.ADMIN_API_KEY;

    // Fallback if ADMIN_API_KEY is not set (should not happen in prod)
    if (!adminKey) {
      console.error('ADMIN_API_KEY is not configured in the environment');
      return res.status(500).json({ msg: 'Server Configuration Error' });
    }

    // Hash both tokens to ensure they are the same length before comparison
    // This avoids timing attacks and prevents algorithmic DoS from scryptSync
    const providedHash = crypto.createHash('sha256').update(token).digest();
    const expectedHash = crypto.createHash('sha256').update(adminKey).digest();

    if (crypto.timingSafeEqual(providedHash, expectedHash)) {
      next();
    } else {
      res.status(401).json({ msg: 'Invalid token, authorization denied' });
    }
  } catch (err) {
    console.error('Auth middleware error:', err);
    res.status(500).json({ msg: 'Server Error' });
  }
};
