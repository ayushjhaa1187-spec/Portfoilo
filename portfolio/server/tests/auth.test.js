const auth = require('../middleware/auth');
const assert = require('assert');

console.log('Running Auth Middleware Tests...');

// Mock Response Object
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
  res.send = (data) => {
    res.body = data;
    return res;
  };
  return res;
};

// Test Case 1: Missing Token
{
  console.log('Test 1: Missing Token');
  const req = { header: () => undefined };
  const res = mockRes();
  const next = () => {
    throw new Error('Next should not be called');
  };

  auth(req, res, next);
  assert.strictEqual(res.statusCode, 401);
  assert.strictEqual(res.body.msg, 'No token, authorization denied');
  console.log('✅ Passed');
}

// Test Case 2: Invalid Token
{
  console.log('Test 2: Invalid Token');
  process.env.ADMIN_API_KEY = 'secret123';
  const req = { header: () => 'wrong-key' };
  const res = mockRes();
  const next = () => {
    throw new Error('Next should not be called');
  };

  auth(req, res, next);
  assert.strictEqual(res.statusCode, 401);
  assert.strictEqual(res.body.msg, 'Token is not valid');
  console.log('✅ Passed');
}

// Test Case 3: Valid Token
{
  console.log('Test 3: Valid Token');
  process.env.ADMIN_API_KEY = 'secret123';
  const req = { header: () => 'secret123' };
  const res = mockRes();
  let nextCalled = false;
  const next = () => {
    nextCalled = true;
  };

  auth(req, res, next);
  assert.strictEqual(nextCalled, true);
  console.log('✅ Passed');
}

console.log('All tests passed!');
