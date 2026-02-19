const test = require('node:test');
const assert = require('node:assert');
const app = require('../server');
const Project = require('../models/Project');

test('GET /api/projects/:slug', async (t) => {
  // Start server
  const server = app.listen(0);
  const { port } = server.address();
  const baseUrl = `http://localhost:${port}/api/projects`;

  // Mock Project.findOne
  const findOneMock = t.mock.method(Project, 'findOne');

  await t.test('returns project when found', async () => {
    const mockProject = {
      title: 'Test Project',
      slug: 'test-project',
      shortDescription: 'Test Description'
    };

    // Reset mock call count
    findOneMock.mock.resetCalls();
    findOneMock.mock.mockImplementation(() => Promise.resolve(mockProject));

    const res = await fetch(`${baseUrl}/test-project`);
    const data = await res.json();

    assert.strictEqual(res.status, 200);
    assert.deepStrictEqual(data, mockProject);
    assert.strictEqual(findOneMock.mock.callCount(), 1);
  });

  await t.test('returns 404 when not found', async () => {
    findOneMock.mock.resetCalls();
    findOneMock.mock.mockImplementation(() => Promise.resolve(null));

    const res = await fetch(`${baseUrl}/non-existent`);
    const data = await res.json();

    assert.strictEqual(res.status, 404);
    assert.strictEqual(data.msg, 'Project not found');
  });

  await t.test('returns 500 on server error', async () => {
    findOneMock.mock.resetCalls();
    findOneMock.mock.mockImplementation(() => Promise.reject(new Error('Database error')));

    const res = await fetch(`${baseUrl}/error-slug`);
    const text = await res.text();

    assert.strictEqual(res.status, 500);
    assert.strictEqual(text, 'Server Error');
  });

  // Cleanup
  server.close();
});
