const crypto = require('crypto');

const auth = (req, res, next) => {
  const apiKey = req.header('x-api-key');

  if (!apiKey) {
    return res.status(401).json({ msg: 'No API key, authorization denied' });
  }

  const adminApiKey = process.env.ADMIN_API_KEY;

  if (!adminApiKey) {
    console.error('ADMIN_API_KEY is not defined in environment variables');
    return res.status(500).json({ msg: 'Server Configuration Error' });
  }

  try {
    const a = crypto.createHash('sha256').update(apiKey).digest();
    const b = crypto.createHash('sha256').update(adminApiKey).digest();

    if (crypto.timingSafeEqual(a, b)) {
      next();
    } else {
      res.status(403).json({ msg: 'Invalid API key' });
    }
  } catch (err) {
    console.error('Auth Middleware Error:', err.message);
    res.status(500).json({ msg: 'Server Error' });
  }
};

module.exports = auth;
