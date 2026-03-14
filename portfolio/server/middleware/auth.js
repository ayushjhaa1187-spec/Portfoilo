const crypto = require('crypto');

const auth = (req, res, next) => {
  const apiKey = req.header('x-api-key');

  if (!apiKey) {
    return res.status(401).json({ msg: 'No API key, authorization denied' });
  }

  try {
    const validKey = process.env.ADMIN_API_KEY;

    if (!validKey) {
      console.error('ADMIN_API_KEY is not defined in environment variables');
      return res.status(500).json({ msg: 'Server configuration error' });
    }

    // Hash both keys before comparison to ensure they have the same length
    // and to mitigate timing attacks using crypto.timingSafeEqual
    const validKeyHash = crypto.createHash('sha256').update(validKey).digest();
    const apiKeyHash = crypto.createHash('sha256').update(apiKey).digest();

    if (!crypto.timingSafeEqual(validKeyHash, apiKeyHash)) {
      return res.status(401).json({ msg: 'Invalid API key' });
    }

    next();
  } catch (err) {
    console.error('Auth middleware error:', err.message);
    res.status(500).json({ msg: 'Server Error' });
  }
};

module.exports = auth;
