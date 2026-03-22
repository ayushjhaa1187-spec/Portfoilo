const crypto = require('crypto');

module.exports = function (req, res, next) {
  // Get API key from header
  const apiKey = req.header('x-api-key');

  // Check if no key
  if (!apiKey) {
    return res.status(401).json({ msg: 'No API key, authorization denied' });
  }

  // Verify key
  try {
    const validKey = process.env.ADMIN_API_KEY;

    if (!validKey) {
      console.error('ADMIN_API_KEY environment variable is not set');
      return res.status(500).json({ msg: 'Server Configuration Error' });
    }

    const expectedHash = crypto.createHash('sha256').update(validKey).digest();
    const actualHash = crypto.createHash('sha256').update(apiKey).digest();

    if (!crypto.timingSafeEqual(expectedHash, actualHash)) {
      return res.status(401).json({ msg: 'Invalid API key' });
    }

    next();
  } catch (err) {
    res.status(500).json({ msg: 'Server Error during authentication' });
  }
};
