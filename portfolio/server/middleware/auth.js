const crypto = require('crypto');

const auth = (req, res, next) => {
  const apiKey = req.header('x-api-key');

  if (!apiKey) {
    return res.status(401).json({ msg: 'No token, authorization denied' });
  }

  const adminKey = process.env.ADMIN_API_KEY;

  if (!adminKey) {
    console.error('ADMIN_API_KEY is not set in environment variables');
    return res.status(500).json({ msg: 'Server configuration error' });
  }

  // Use timingSafeEqual to prevent timing attacks
  try {
    const bufferApiKey = Buffer.from(apiKey);
    const bufferAdminKey = Buffer.from(adminKey);

    if (bufferApiKey.length !== bufferAdminKey.length || !crypto.timingSafeEqual(bufferApiKey, bufferAdminKey)) {
      return res.status(401).json({ msg: 'Invalid token' });
    }

    next();
  } catch (err) {
    console.error('Auth middleware error:', err);
    res.status(500).json({ msg: 'Server Error' });
  }
};

module.exports = auth;
