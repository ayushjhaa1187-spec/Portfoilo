const crypto = require('crypto');
const dotenv = require('dotenv');
dotenv.config();

module.exports = function (req, res, next) {
  // Get token from header
  const token = req.header('x-api-key');

  // Check if not token
  if (!token) {
    return res.status(401).json({ msg: 'No token, authorization denied' });
  }

  // Verify token
  try {
    const adminKey = process.env.ADMIN_API_KEY;

    if (!adminKey) {
        console.error('ADMIN_API_KEY is not defined in environment variables');
        return res.status(500).json({ msg: 'Server Configuration Error' });
    }

    // Use timingSafeEqual to prevent timing attacks
    const tokenBuffer = Buffer.from(token);
    const adminKeyBuffer = Buffer.from(adminKey);

    if (tokenBuffer.length !== adminKeyBuffer.length || !crypto.timingSafeEqual(tokenBuffer, adminKeyBuffer)) {
      return res.status(401).json({ msg: 'Token is not valid' });
    }

    next();
  } catch (err) {
    console.error('Auth middleware error:', err);
    res.status(500).json({ msg: 'Server Error' });
  }
};
