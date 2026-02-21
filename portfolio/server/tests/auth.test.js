const auth = require('../middleware/auth');
const assert = require('assert');

// Mock helpers
const mockRes = () => {
  const res = {};
  res.status = (code) => {
    res.statusCode = code;
    return res;
  };
  res.json = (data) => {
    res.data = data;
    return res;
  };
  return res;
};

const mockNext = () => {
  let called = false;
  const next = () => { called = true; };
  next.called = () => called;
  return next;
};

console.log('Running auth middleware tests...');

try {
  // Test 1: No API Key
  const req1 = { header: () => undefined };
  const res1 = mockRes();
  const next1 = mockNext();
  auth(req1, res1, next1);
  assert.strictEqual(res1.statusCode, 401, 'Test 1 Failed: Should be 401');
  assert.strictEqual(next1.called(), false, 'Test 1 Failed: next() should not be called');
  console.log('Test 1 Passed: No API Key -> 401');

  // Test 2: Invalid API Key
  process.env.ADMIN_API_KEY = 'secret123';
  const req2 = { header: () => 'wrong-key' };
  const res2 = mockRes();
  const next2 = mockNext();
  auth(req2, res2, next2);
  assert.strictEqual(res2.statusCode, 401, 'Test 2 Failed: Should be 401');
  assert.strictEqual(next2.called(), false, 'Test 2 Failed: next() should not be called');
  console.log('Test 2 Passed: Invalid API Key -> 401');

  // Test 3: Valid API Key
  const req3 = { header: () => 'secret123' };
  const res3 = mockRes();
  const next3 = mockNext();
  auth(req3, res3, next3);
  assert.strictEqual(next3.called(), true, 'Test 3 Failed: next() should be called');
  console.log('Test 3 Passed: Valid API Key -> next()');

  // Test 4: Missing Env Var (Fail Safe)
  delete process.env.ADMIN_API_KEY;
  const req4 = { header: () => 'any-key' };
  const res4 = mockRes();
  const next4 = mockNext();
  auth(req4, res4, next4);
  assert.strictEqual(res4.statusCode, 401, 'Test 4 Failed: Should be 401 when env var missing');
  console.log('Test 4 Passed: Missing Env Var -> 401');

  console.log('All tests passed!');
} catch (error) {
  console.error(error);
  process.exit(1);
}
