const crypto = require('crypto');

module.exports = function(req, res, next) {
  // Get token from header
  const token = req.header('x-api-key');

  // Check if no token
  if (!token) {
    return res.status(401).json({ msg: 'No API key, authorization denied' });
  }

  try {
    const adminApiKey = process.env.ADMIN_API_KEY;

    if (!adminApiKey) {
       console.error("ADMIN_API_KEY environment variable is not set.");
       return res.status(500).json({ msg: 'Server Configuration Error' });
    }

    // Hash both tokens using SHA-256 to ensure they are the exact same length
    // before comparing them with timingSafeEqual to prevent timing attacks
    const providedHash = crypto.createHash('sha256').update(token).digest();
    const expectedHash = crypto.createHash('sha256').update(adminApiKey).digest();

    if (crypto.timingSafeEqual(providedHash, expectedHash)) {
      next();
    } else {
      res.status(401).json({ msg: 'Invalid API key' });
    }
  } catch (err) {
    console.error('Something went wrong with auth middleware', err);
    res.status(500).json({ msg: 'Server Error' });
  }
};
