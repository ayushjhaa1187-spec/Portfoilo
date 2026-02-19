const request = require('supertest');
const app = require('../server');

// Mock connectDB to prevent DB connection
jest.mock('../config/db', () => jest.fn());

describe('Security Headers', () => {
  it('should have security headers', async () => {
    const res = await request(app).get('/');

    // Check for Helmet headers
    expect(res.headers['x-dns-prefetch-control']).toBe('off');
    expect(res.headers['x-frame-options']).toBe('SAMEORIGIN');
    expect(res.headers['strict-transport-security']).toBeDefined();
    expect(res.headers['x-download-options']).toBe('noopen');
    expect(res.headers['x-content-type-options']).toBe('nosniff');
    expect(res.headers['x-xss-protection']).toBe('0');
    expect(res.headers['content-security-policy']).toBeDefined();
  });
});
