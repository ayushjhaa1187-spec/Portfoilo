const crypto = require('crypto');

module.exports = function(req, res, next) {
  const apiKey = req.header('x-api-key');

  if (!apiKey) {
    return res.status(401).json({ msg: 'No API key, authorization denied' });
  }

  try {
    const adminApiKey = process.env.ADMIN_API_KEY;

    if (!adminApiKey) {
      console.error('ADMIN_API_KEY environment variable is not set');
      return res.status(500).json({ msg: 'Server Configuration Error' });
    }

    const providedKeyBuffer = crypto.createHash('sha256').update(apiKey).digest();
    const expectedKeyBuffer = crypto.createHash('sha256').update(adminApiKey).digest();

    if (crypto.timingSafeEqual(providedKeyBuffer, expectedKeyBuffer)) {
      next();
    } else {
      res.status(401).json({ msg: 'Invalid API key' });
    }
  } catch (err) {
    console.error('Something went wrong with auth middleware', err);
    res.status(500).json({ msg: 'Server Error' });
  }
};
