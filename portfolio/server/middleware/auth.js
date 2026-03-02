const crypto = require('crypto');

const auth = (req, res, next) => {
  // Get API key from header
  const apiKey = req.header('x-api-key');

  // Check if not API key
  if (!apiKey) {
    return res.status(401).json({ msg: 'No API key, authorization denied' });
  }

  try {
    const expectedKey = process.env.ADMIN_API_KEY;

    if (!expectedKey) {
      console.error('CRITICAL: ADMIN_API_KEY is not set in environment variables');
      return res.status(500).send('Server Error');
    }

    // Normalize lengths to prevent timing attacks and crashes due to different buffer lengths
    const providedKeyBuffer = crypto.createHash('sha256').update(apiKey).digest();
    const expectedKeyBuffer = crypto.createHash('sha256').update(expectedKey).digest();

    // Use timingSafeEqual to prevent timing attacks
    if (!crypto.timingSafeEqual(providedKeyBuffer, expectedKeyBuffer)) {
      return res.status(401).json({ msg: 'Invalid API key' });
    }

    next();
  } catch (err) {
    console.error('Auth middleware error:', err.message);
    res.status(500).json({ msg: 'Server Error' });
  }
};

module.exports = auth;
