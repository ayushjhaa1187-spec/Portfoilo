const assert = require('assert');
// We don't need dotenv here if we set process.env manually, but it's good practice for standalone tests if run locally
// However, to keep it clean and match the refactor, we'll just set process.env directly in the test cases.
const auth = require('../middleware/auth');

// Mock express objects
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

const mockNext = () => {
  let called = false;
  return () => { called = true; };
};

console.log('Running Auth Middleware Tests...');

// Test 1: Missing API Key
{
  const req = { header: () => undefined };
  const res = mockRes();
  const next = mockNext();

  // Ensure ADMIN_API_KEY is set for this test (though auth middleware checks for key existence first)
  process.env.ADMIN_API_KEY = 'test-secret-key';

  auth(req, res, next);

  assert.strictEqual(res.statusCode, 401, 'Should return 401 for missing key');
  assert.strictEqual(res.body.msg, 'No token, authorization denied');
  console.log('✅ Test 1 Passed: Missing API Key blocked');
}

// Test 2: Invalid API Key
{
  process.env.ADMIN_API_KEY = 'secret-key';
  const req = { header: () => 'wrong-key' };
  const res = mockRes();
  const next = mockNext();

  auth(req, res, next);

  assert.strictEqual(res.statusCode, 401, 'Should return 401 for invalid key');
  assert.strictEqual(res.body.msg, 'Invalid token');
  console.log('✅ Test 2 Passed: Invalid API Key blocked');
}

// Test 3: Valid API Key
{
  process.env.ADMIN_API_KEY = 'secret-key';
  const req = { header: () => 'secret-key' };
  const res = mockRes();
  let nextCalled = false;
  const next = () => { nextCalled = true; };

  auth(req, res, next);

  assert.strictEqual(nextCalled, true, 'Should call next() for valid key');
  console.log('✅ Test 3 Passed: Valid API Key accepted');
}

// Test 4: Missing Server Config (ADMIN_API_KEY not set)
{
  delete process.env.ADMIN_API_KEY;
  const req = { header: () => 'some-key' };
  const res = mockRes();
  const next = mockNext();

  // Suppress console.error for expected error
  const originalConsoleError = console.error;
  console.error = () => {};

  auth(req, res, next);

  // Restore console.error
  console.error = originalConsoleError;

  assert.strictEqual(res.statusCode, 500, 'Should return 500 when ADMIN_API_KEY is missing');
  assert.strictEqual(res.body.msg, 'Server configuration error');
  console.log('✅ Test 4 Passed: Missing Server Config handled safely');
}


console.log('🎉 All Auth Tests Passed!');
