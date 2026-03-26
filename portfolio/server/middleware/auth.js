const crypto = require('crypto');

module.exports = function(req, res, next) {
  const apiKey = req.header('x-api-key');

  if (!apiKey) {
    return res.status(401).json({ msg: 'No API key, authorization denied' });
  }

  try {
    const adminKey = process.env.ADMIN_API_KEY;
    if (!adminKey) {
      console.error('ADMIN_API_KEY environment variable is not set');
      return res.status(500).json({ msg: 'Server configuration error' });
    }

    const providedKeyBuffer = crypto.createHash('sha256').update(apiKey).digest();
    const expectedKeyBuffer = crypto.createHash('sha256').update(adminKey).digest();

    if (!crypto.timingSafeEqual(providedKeyBuffer, expectedKeyBuffer)) {
      return res.status(401).json({ msg: 'Invalid API key' });
    }

    next();
  } catch (err) {
    console.error('Auth middleware error:', err);
    res.status(500).json({ msg: 'Server Error' });
  }
};
