const auth = require('../middleware/auth');
const assert = require('assert');

// Mock req, res, next
const mockReq = (headers = {}) => ({
  header: (key) => headers[key]
});

const mockRes = () => {
  const res = {};
  res.status = (code) => {
    res.statusCode = code;
    return res;
  };
  res.json = (data) => {
    res.jsonData = data;
    return res;
  };
  return res;
};

const mockNext = () => {
  let called = false;
  const next = () => {
    called = true;
  };
  next.called = () => called;
  return next;
};

// Set env var for testing
process.env.ADMIN_API_KEY = 'secret-key';

// Test 1: No API Key
{
  console.log('Test 1: No API Key...');
  const req = mockReq();
  const res = mockRes();
  const next = mockNext();

  auth(req, res, next);

  assert.strictEqual(res.statusCode, 401);
  assert.strictEqual(res.jsonData.msg, 'No API key, authorization denied');
  assert.strictEqual(next.called(), false);
  console.log('PASSED');
}

// Test 2: Invalid API Key
{
  console.log('Test 2: Invalid API Key...');
  const req = mockReq({ 'x-api-key': 'wrong-key' });
  const res = mockRes();
  const next = mockNext();

  auth(req, res, next);

  assert.strictEqual(res.statusCode, 401);
  assert.strictEqual(res.jsonData.msg, 'Invalid API key');
  assert.strictEqual(next.called(), false);
  console.log('PASSED');
}

// Test 3: Valid API Key
{
  console.log('Test 3: Valid API Key...');
  const req = mockReq({ 'x-api-key': 'secret-key' });
  const res = mockRes();
  const next = mockNext();

  auth(req, res, next);

  assert.strictEqual(next.called(), true);
  console.log('PASSED');
}

console.log('All tests passed!');
