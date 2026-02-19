const { describe, it, mock } = require('node:test');
const assert = require('node:assert');
const { createProjectFactory } = require('../../controllers/projectController');

describe('projectController', () => {
  it('should create a project successfully', async () => {
    const req = {
      body: {
        title: 'Test Project',
        slug: 'test-project',
        category: 'Web',
        shortDescription: 'A test project'
      }
    };

    const res = {
      json: mock.fn(),
      status: mock.fn(function() { return this; }), // Return res for chaining
      send: mock.fn()
    };

    // Mock Project Model
    const MockProject = class {
      constructor(data) {
        Object.assign(this, data);
      }
      async save() {
        return this;
      }
    };

    const createProject = createProjectFactory(MockProject);
    await createProject(req, res);

    assert.strictEqual(res.json.mock.calls.length, 1);
    const responseData = res.json.mock.calls[0].arguments[0];
    assert.strictEqual(responseData.title, 'Test Project');
  });

  it('should handle server errors', async () => {
    const req = { body: {} };
    const res = {
      json: mock.fn(),
      status: mock.fn(function() { return this; }),
      send: mock.fn()
    };

    // Mock console.error to avoid noise in test output
    const consoleMock = mock.method(console, 'error', () => {});

    // Mock Project Model to throw error
    const MockProject = class {
      constructor(data) {}
      async save() {
        throw new Error('Database Error');
      }
    };

    const createProject = createProjectFactory(MockProject);
    await createProject(req, res);

    assert.strictEqual(res.status.mock.calls.length, 1);
    assert.strictEqual(res.status.mock.calls[0].arguments[0], 500);
    assert.strictEqual(res.send.mock.calls.length, 1);
    assert.strictEqual(res.send.mock.calls[0].arguments[0], 'Server Error');

    consoleMock.mock.restore();
  });
});
