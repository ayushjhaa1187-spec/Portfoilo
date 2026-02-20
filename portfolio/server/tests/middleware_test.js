const auth = require('../middleware/auth');
const assert = require('assert');

// Mock req, res, next
const mockReq = (headers = {}) => ({
  header: (name) => headers[name],
});

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

// Test 1: Valid API Key
process.env.ADMIN_API_KEY = 'secret-key';
const req1 = mockReq({ 'x-admin-key': 'secret-key' });
const res1 = mockRes();
let nextCalled1 = false;
auth(req1, res1, () => { nextCalled1 = true; });

if (nextCalled1) {
  console.log('✅ Test 1 Passed: Valid API Key calls next()');
} else {
  console.error('❌ Test 1 Failed: Valid API Key did NOT call next()');
  process.exit(1);
}

// Test 2: Invalid API Key
const req2 = mockReq({ 'x-admin-key': 'wrong-key' });
const res2 = mockRes();
let nextCalled2 = false;
auth(req2, res2, () => { nextCalled2 = true; });

if (!nextCalled2 && res2.statusCode === 401) {
  console.log('✅ Test 2 Passed: Invalid API Key returns 401');
} else {
  console.error(`❌ Test 2 Failed: Expected 401, got ${res2.statusCode}`);
  process.exit(1);
}

// Test 3: Missing API Key
const req3 = mockReq({});
const res3 = mockRes();
let nextCalled3 = false;
auth(req3, res3, () => { nextCalled3 = true; });

if (!nextCalled3 && res3.statusCode === 401) {
  console.log('✅ Test 3 Passed: Missing API Key returns 401');
} else {
  console.error(`❌ Test 3 Failed: Expected 401, got ${res3.statusCode}`);
  process.exit(1);
}

// Test 4: Environment Variable Not Set
// Save the original env var just in case, though in this isolated process it shouldn't matter
const originalEnv = process.env.ADMIN_API_KEY;
delete process.env.ADMIN_API_KEY;

const req4 = mockReq({ 'x-admin-key': 'secret-key' });
const res4 = mockRes();
let nextCalled4 = false;
auth(req4, res4, () => { nextCalled4 = true; });

if (!nextCalled4 && res4.statusCode === 500) {
  console.log('✅ Test 4 Passed: Missing ENV returns 500');
} else {
  console.error(`❌ Test 4 Failed: Expected 500, got ${res4.statusCode}`);
  process.exit(1);
}

// Restore env
if (originalEnv) process.env.ADMIN_API_KEY = originalEnv;

console.log('All tests passed!');
