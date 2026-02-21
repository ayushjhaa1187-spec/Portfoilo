const request = require('supertest');
const app = require('../app');

describe('Server API', () => {
  it('GET / should return 200 and welcome message', async () => {
    const res = await request(app).get('/');
    expect(res.statusCode).toEqual(200);
    expect(res.text).toEqual('API is running...');
  });

  it('GET /api/unknown should return 404', async () => {
    const res = await request(app).get('/api/unknown');
    expect(res.statusCode).toEqual(404);
  });
});
