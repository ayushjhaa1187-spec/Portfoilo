const crypto = require('crypto');

/**
 * Authentication middleware to protect sensitive routes.
 * Uses x-api-key header and compares against ADMIN_API_KEY environment variable.
 */
const auth = (req, res, next) => {
  const apiKey = req.header('x-api-key');

  // Check if API key is provided
  if (!apiKey) {
    return res.status(401).json({ msg: 'No API key, authorization denied' });
  }

  // Ensure ADMIN_API_KEY is configured on the server
  if (!process.env.ADMIN_API_KEY) {
    console.error('CRITICAL: ADMIN_API_KEY environment variable is not set');
    return res.status(500).json({ msg: 'Server configuration error' });
  }

  try {
    // Prevent timing attacks using crypto.timingSafeEqual
    // We hash both the provided key and the expected key first to ensure they
    // are the same length buffer before comparing, avoiding length check leaks
    const expectedKeyHash = crypto
      .createHash('sha256')
      .update(process.env.ADMIN_API_KEY)
      .digest();

    const providedKeyHash = crypto
      .createHash('sha256')
      .update(apiKey)
      .digest();

    if (crypto.timingSafeEqual(expectedKeyHash, providedKeyHash)) {
      next(); // Authentication successful
    } else {
      res.status(401).json({ msg: 'Invalid API key' });
    }
  } catch (err) {
    console.error('Authentication Error:', err.message);
    res.status(500).json({ msg: 'Server Error during authentication' });
  }
};

module.exports = auth;
