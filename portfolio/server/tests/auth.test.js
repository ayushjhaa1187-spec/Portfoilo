const { test, describe, beforeEach, afterEach } = require('node:test');
const assert = require('node:assert');
const auth = require('../middleware/auth');

describe('Auth Middleware', () => {
  let req;
  let res;
  let next;
  let originalEnv;

  beforeEach(() => {
    // Save original env
    originalEnv = process.env.ADMIN_API_KEY;

    // Mock req, res, next
    req = {
      header: (key) => req.headers[key.toLowerCase()],
      headers: {}
    };
    res = {
      statusCode: 200,
      jsonData: null,
      status(code) {
        this.statusCode = code;
        return this;
      },
      json(data) {
        this.jsonData = data;
        return this;
      }
    };
    next = () => {
      res.calledNext = true;
    };
    res.calledNext = false;
  });

  afterEach(() => {
    // Restore env
    process.env.ADMIN_API_KEY = originalEnv;
  });

  test('should return 401 if no API key is provided', () => {
    process.env.ADMIN_API_KEY = 'secret';
    auth(req, res, next);

    assert.strictEqual(res.statusCode, 401);
    assert.deepStrictEqual(res.jsonData, { msg: 'No API key, authorization denied' });
    assert.strictEqual(res.calledNext, false);
  });

  test('should return 401 if API key is invalid', () => {
    process.env.ADMIN_API_KEY = 'secret';
    req.headers['x-api-key'] = 'wrong-key';

    auth(req, res, next);

    assert.strictEqual(res.statusCode, 401);
    assert.deepStrictEqual(res.jsonData, { msg: 'Invalid API key' });
    assert.strictEqual(res.calledNext, false);
  });

  test('should call next if API key is valid', () => {
    process.env.ADMIN_API_KEY = 'secret';
    req.headers['x-api-key'] = 'secret';

    auth(req, res, next);

    assert.strictEqual(res.calledNext, true);
  });

  test('should return 401 if ADMIN_API_KEY is not set in env', () => {
    delete process.env.ADMIN_API_KEY;
    req.headers['x-api-key'] = 'some-key';

    auth(req, res, next);

    assert.strictEqual(res.statusCode, 401);
    assert.deepStrictEqual(res.jsonData, { msg: 'Invalid API key' });
    assert.strictEqual(res.calledNext, false);
  });
});
