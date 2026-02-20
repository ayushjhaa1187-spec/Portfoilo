/**
 * Simple in-memory rate limiting middleware
 * @param {Object} options - Configuration options
 * @param {number} options.windowMs - Time window in milliseconds
 * @param {number} options.max - Maximum number of requests allowed in the window
 * @param {string} options.message - Error message to return when limit is exceeded
 * @returns {Function} Express middleware function
 */
const rateLimit = (options) => {
  const { windowMs, max, message } = options;
  const requests = new Map();

  // Periodically clean up the Map to prevent memory leaks
  const cleanup = () => {
    const now = Date.now();
    for (const [ip, timestamps] of requests.entries()) {
      const active = timestamps.filter(t => now - t < windowMs);
      if (active.length === 0) {
        requests.delete(ip);
      } else {
        requests.set(ip, active);
      }
    }
  };

  // Run cleanup every hour
  const cleanupInterval = setInterval(cleanup, 60 * 60 * 1000);
  if (cleanupInterval.unref) {
    cleanupInterval.unref();
  }

  return (req, res, next) => {
    // Get IP address, prioritizing x-forwarded-for for proxies
    const ip = (req.headers['x-forwarded-for'] || '').split(',')[0].trim() ||
               req.ip ||
               req.socket.remoteAddress ||
               'unknown';

    const now = Date.now();

    if (!requests.has(ip)) {
      requests.set(ip, []);
    }

    let userRequests = requests.get(ip);

    // Filter out timestamps that are outside the current window
    userRequests = userRequests.filter(timestamp => now - timestamp < windowMs);

    if (userRequests.length >= max) {
      return res.status(429).json({
        msg: message || 'Too many requests, please try again later.'
      });
    }

    // Add current request timestamp
    userRequests.push(now);
    requests.set(ip, userRequests);

    next();
  };
};

module.exports = rateLimit;
