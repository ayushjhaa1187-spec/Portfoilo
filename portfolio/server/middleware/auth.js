const crypto = require('crypto');

module.exports = function (req, res, next) {
  const apiKey = req.header('x-api-key');

  if (!apiKey) {
    return res.status(401).json({ msg: 'No API key, authorization denied' });
  }

  try {
    const expectedKey = process.env.ADMIN_API_KEY;
    if (!expectedKey) {
      console.error('ADMIN_API_KEY is not set in environment');
      return res.status(500).json({ msg: 'Server configuration error' });
    }

    const expectedKeyBuffer = crypto.createHash('sha256').update(expectedKey).digest();
    const providedKeyBuffer = crypto.createHash('sha256').update(apiKey).digest();

    if (!crypto.timingSafeEqual(expectedKeyBuffer, providedKeyBuffer)) {
      return res.status(401).json({ msg: 'Invalid API key' });
    }

    next();
  } catch (err) {
    console.error('Auth middleware error:', err);
    res.status(500).json({ msg: 'Server Error' });
  }
};
