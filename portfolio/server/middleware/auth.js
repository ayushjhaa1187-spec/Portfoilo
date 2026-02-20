const crypto = require('crypto');

module.exports = function (req, res, next) {
  // Check if API key is set in environment
  if (!process.env.ADMIN_API_KEY) {
    console.error('FATAL ERROR: ADMIN_API_KEY is not defined.');
    return res.status(500).json({ msg: 'Server Configuration Error' });
  }

  // Get token from header
  const token = req.header('x-admin-key');

  // Check if not token
  if (!token) {
    return res.status(401).json({ msg: 'No token, authorization denied' });
  }

  // Verify token
  try {
    const apiKey = process.env.ADMIN_API_KEY;

    // Constant time comparison to prevent timing attacks
    // First check length to avoid error in timingSafeEqual
    if (token.length !== apiKey.length) {
      return res.status(401).json({ msg: 'Token is not valid' });
    }

    const tokenBuffer = Buffer.from(token);
    const apiKeyBuffer = Buffer.from(apiKey);

    if (!crypto.timingSafeEqual(tokenBuffer, apiKeyBuffer)) {
      return res.status(401).json({ msg: 'Token is not valid' });
    }

    next();
  } catch (err) {
    console.error('something wrong with auth middleware');
    res.status(500).json({ msg: 'Server Error' });
  }
};
