module.exports = function (req, res, next) {
  // Get token from header
  const apiKey = req.header('x-api-key');

  // Check if not token
  if (!apiKey) {
    return res.status(401).json({ msg: 'No token, authorization denied' });
  }

  // Verify token
  try {
    // Check if ADMIN_API_KEY is set in environment
    if (!process.env.ADMIN_API_KEY) {
        console.error('ADMIN_API_KEY not set in environment variables');
        return res.status(500).json({ msg: 'Server Configuration Error' });
    }

    if (apiKey !== process.env.ADMIN_API_KEY) {
      return res.status(401).json({ msg: 'Token is not valid' });
    }
    next();
  } catch (err) {
    console.error('something wrong with auth middleware');
    res.status(500).json({ msg: 'Server Error' });
  }
};
