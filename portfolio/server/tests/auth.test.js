const auth = require('../middleware/auth');
const assert = require('assert');

console.log('Running auth middleware tests...');

// Mock objects
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

// Test 1: No Token
{
  const req = { header: () => null };
  const res = mockRes();
  let nextCalled = false;
  const next = () => { nextCalled = true; };

  auth(req, res, next);

  assert.strictEqual(res.statusCode, 401, 'Should return 401 if no token');
  assert.strictEqual(nextCalled, false, 'Next should not be called if no token');
  console.log('✅ Test 1 Passed: No Token -> 401');
}

// Test 2: Invalid Token
{
  process.env.ADMIN_API_KEY = 'secret123';
  const req = { header: () => 'wrong-token' };
  const res = mockRes();
  let nextCalled = false;
  const next = () => { nextCalled = true; };

  auth(req, res, next);

  assert.strictEqual(res.statusCode, 401, 'Should return 401 if invalid token');
  assert.strictEqual(nextCalled, false, 'Next should not be called if invalid token');
  console.log('✅ Test 2 Passed: Invalid Token -> 401');
}

// Test 3: Valid Token
{
  process.env.ADMIN_API_KEY = 'secret123';
  const req = { header: () => 'secret123' };
  const res = mockRes();
  let nextCalled = false;
  const next = () => { nextCalled = true; };

  auth(req, res, next);

  assert.strictEqual(nextCalled, true, 'Next should be called if valid token');
  assert.strictEqual(res.statusCode, undefined, 'Status should not be set if valid token');
  console.log('✅ Test 3 Passed: Valid Token -> Next()');
}

console.log('🎉 All tests passed!');
