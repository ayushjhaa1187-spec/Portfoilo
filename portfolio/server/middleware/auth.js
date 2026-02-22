module.exports = function (req, res, next) {
  // Get API key from header
  const apiKey = req.header('x-api-key');

  // Check if no API key
  if (!apiKey) {
    return res.status(401).json({ msg: 'No API key, authorization denied' });
  }

  // Verify API key
  try {
    if (apiKey !== process.env.ADMIN_API_KEY) {
      return res.status(401).json({ msg: 'Invalid API key' });
    }
    next();
  } catch (err) {
    console.error('Auth Middleware Error:', err);
    res.status(500).json({ msg: 'Server Error' });
  }
};
