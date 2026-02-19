module.exports = function (req, res, next) {
  // Get token from header
  const apiKey = req.header('x-api-key');
  const adminKey = process.env.ADMIN_API_KEY;

  // Check if API key is set in environment
  if (!adminKey) {
    console.error('ADMIN_API_KEY is not defined in environment variables');
    return res.status(500).json({ msg: 'Server Configuration Error' });
  }

  // Check if no token
  if (!apiKey) {
    return res.status(401).json({ msg: 'No token, authorization denied' });
  }

  // Verify token
  try {
    if (apiKey === adminKey) {
      next();
    } else {
      res.status(401).json({ msg: 'Token is not valid' });
    }
  } catch (err) {
    console.error('something wrong with auth middleware');
    res.status(500).json({ msg: 'Server Error' });
  }
};
