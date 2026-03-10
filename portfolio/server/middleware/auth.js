const crypto = require('crypto');

const auth = (req, res, next) => {
  const apiKey = req.header('x-api-key');

  if (!apiKey) {
    return res.status(401).json({ msg: 'No API key, authorization denied' });
  }

  const validKey = process.env.ADMIN_API_KEY;

  if (!validKey) {
    console.error('ADMIN_API_KEY is not defined in environment variables.');
    return res.status(500).json({ msg: 'Server Configuration Error' });
  }

  try {
    const keyBuffer = crypto.createHash('sha256').update(apiKey).digest();
    const validKeyBuffer = crypto.createHash('sha256').update(validKey).digest();

    if (crypto.timingSafeEqual(keyBuffer, validKeyBuffer)) {
      next();
    } else {
      res.status(401).json({ msg: 'Invalid API key' });
    }
  } catch (err) {
    console.error('Auth Middleware Error:', err.message);
    res.status(500).json({ msg: 'Server Error during authentication' });
  }
};

module.exports = auth;
