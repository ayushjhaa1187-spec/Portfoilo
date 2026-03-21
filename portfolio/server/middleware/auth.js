const crypto = require('crypto');

module.exports = function (req, res, next) {
  // Get API key from header
  const apiKey = req.header('x-api-key');

  // Check if no API key
  if (!apiKey) {
    return res.status(401).json({ msg: 'No API key, authorization denied' });
  }

  try {
    const adminApiKey = process.env.ADMIN_API_KEY;
    if (!adminApiKey) {
      console.error('ADMIN_API_KEY is not defined in environment variables');
      return res.status(500).json({ msg: 'Server Error' });
    }

    // Hash keys to normalize length before timingSafeEqual
    const providedKeyHash = crypto.createHash('sha256').update(apiKey).digest();
    const expectedKeyHash = crypto.createHash('sha256').update(adminApiKey).digest();

    if (crypto.timingSafeEqual(providedKeyHash, expectedKeyHash)) {
      next();
    } else {
      res.status(401).json({ msg: 'Invalid API key' });
    }
  } catch (err) {
    console.error(err.message);
    res.status(500).json({ msg: 'Server Error' });
  }
};
