module.exports = function (req, res, next) {
  // Get API Key from header
  const apiKey = req.header('x-api-key');
  const validApiKey = process.env.ADMIN_API_KEY;

  // Check if no key provided
  if (!apiKey) {
    return res.status(401).json({ msg: 'No API key, authorization denied' });
  }

  // Verify key (and ensure server key is configured)
  if (!validApiKey || apiKey !== validApiKey) {
    return res.status(401).json({ msg: 'Invalid API key' });
  }

  next();
};
