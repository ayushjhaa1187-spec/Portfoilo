const assert = require('assert');
const jwt = require('jsonwebtoken');
const authMiddleware = require('../middleware/auth');
const projectRouter = require('../routes/projects');

console.log('Starting Auth Tests...');

// Mock Response
const mockRes = () => {
  const res = {};
  res.status = (code) => {
    res.statusCode = code;
    return res;
  };
  res.json = (data) => {
    res.body = data;
    return res;
  };
  return res;
};

// Test 1: Middleware with no token
try {
  const req = { header: () => null };
  const res = mockRes();
  const next = () => { throw new Error('Should not call next'); };

  authMiddleware(req, res, next);

  assert.strictEqual(res.statusCode, 401, 'Should return 401 when no token');
  assert.strictEqual(res.body.msg, 'No token, authorization denied');
  console.log('Test 1 Passed: Middleware rejects missing token');
} catch (e) {
  console.error('Test 1 Failed:', e.message);
  process.exit(1);
}

// Test 2: Middleware with invalid token
try {
  const req = { header: () => 'invalidtoken' };
  const res = mockRes();
  const next = () => { throw new Error('Should not call next'); };

  authMiddleware(req, res, next);

  assert.strictEqual(res.statusCode, 401, 'Should return 401 when token is invalid');
  assert.strictEqual(res.body.msg, 'Token is not valid');
  console.log('Test 2 Passed: Middleware rejects invalid token');
} catch (e) {
  console.error('Test 2 Failed:', e.message);
  process.exit(1);
}

// Test 3: Middleware with valid token
try {
  const userId = '123456';
  const token = jwt.sign({ user: { id: userId } }, process.env.JWT_SECRET || 'secret');
  const req = { header: () => token };
  const res = mockRes();
  let nextCalled = false;
  const next = () => { nextCalled = true; };

  authMiddleware(req, res, next);

  assert.ok(nextCalled, 'Should call next()');
  assert.strictEqual(req.user.id, userId, 'Should attach user to req');
  console.log('Test 3 Passed: Middleware accepts valid token');
} catch (e) {
  console.error('Test 3 Failed:', e.message);
  process.exit(1);
}

// Test 4: Check if Project POST route is protected
try {
  const postRoute = projectRouter.stack.find(layer => {
    if (layer.route) {
        return layer.route.methods.post;
    }
    return false;
  });

  if (postRoute) {
      const handlers = postRoute.route.stack;
      // Expecting auth middleware + controller
      if (handlers.length >= 2) {
          console.log('Test 4 Passed: Project POST route has middleware attached');
      } else {
          throw new Error('Project POST route missing middleware (handlers length < 2)');
      }
  } else {
      console.log('Test 4 Warning: Could not find POST route in stack');
  }
} catch (e) {
  console.error('Test 4 Failed:', e.message);
  process.exit(1);
}

console.log('All tests passed!');
