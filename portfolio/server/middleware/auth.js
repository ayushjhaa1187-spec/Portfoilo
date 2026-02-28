const crypto = require('crypto');

module.exports = function(req, res, next) {
  // Get token from header
  const apiKey = req.header('x-api-key');

  // Check if not token
  if (!apiKey) {
    return res.status(401).json({ msg: 'No API key, authorization denied' });
  }

  try {
    const adminKey = process.env.ADMIN_API_KEY;

    if (!adminKey) {
        console.error('ADMIN_API_KEY environment variable is not set.');
        return res.status(500).json({ msg: 'Server Configuration Error' });
    }

    // Use timingSafeEqual to prevent timing attacks
    // Both strings must be the same length, so hash them first to ensure equal length buffers
    const keyBuffer = crypto.scryptSync(apiKey, 'salt', 32);
    const adminBuffer = crypto.scryptSync(adminKey, 'salt', 32);

    if (!crypto.timingSafeEqual(keyBuffer, adminBuffer)) {
        return res.status(401).json({ msg: 'Invalid API key' });
    }

    next();
  } catch (err) {
    res.status(500).json({ msg: 'Server Error during authentication' });
  }
};