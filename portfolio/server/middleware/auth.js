module.exports = function(req, res, next) {
  // Get API key from header
  const apiKey = req.header('x-api-key');

  // Check if no key
  if (!apiKey) {
    return res.status(401).json({ msg: 'No API key, authorization denied' });
  }

  // Verify key
  // Fail closed if ADMIN_API_KEY is not set
  if (!process.env.ADMIN_API_KEY || apiKey !== process.env.ADMIN_API_KEY) {
    return res.status(401).json({ msg: 'Invalid API key' });
  }

  next();
};
