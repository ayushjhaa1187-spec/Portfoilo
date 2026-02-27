const crypto = require('crypto');

// Middleware to protect routes that require authentication
// Requires x-api-key header that matches ADMIN_API_KEY environment variable
const auth = (req, res, next) => {
  const apiKey = req.header('x-api-key');

  // Check if no api key
  if (!apiKey) {
    return res.status(401).json({ msg: 'No API key, authorization denied' });
  }

  try {
    const adminApiKey = process.env.ADMIN_API_KEY;

    // If ADMIN_API_KEY is not configured on the server, fail securely
    if (!adminApiKey) {
      console.error('CRITICAL: ADMIN_API_KEY environment variable is not set');
      return res.status(500).json({ msg: 'Server Configuration Error' });
    }

    // Use crypto.timingSafeEqual to prevent timing attacks
    // Both buffers must be the exact same length
    const apiKeyBuffer = Buffer.from(apiKey);
    const adminApiKeyBuffer = Buffer.from(adminApiKey);

    if (
      apiKeyBuffer.length === adminApiKeyBuffer.length &&
      crypto.timingSafeEqual(apiKeyBuffer, adminApiKeyBuffer)
    ) {
      next();
    } else {
      res.status(401).json({ msg: 'Invalid API key' });
    }
  } catch (err) {
    console.error('Auth middleware error:', err.message);
    res.status(500).json({ msg: 'Server Error' });
  }
};

module.exports = auth;
