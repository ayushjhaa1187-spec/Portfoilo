const test = require('node:test');
const assert = require('node:assert');
const { getProjectBySlug } = require('../controllers/projectController');

test('getProjectBySlug should return 404 if project is not found', async (t) => {
  // Mock Project Model
  const ProjectModel = {
    findOne: (query) => {
      // Verify query is correct
      assert.deepStrictEqual(query, { slug: 'non-existent-slug' });
      return Promise.resolve(null);
    }
  };

  // Mock Request
  const req = {
    params: {
      slug: 'non-existent-slug'
    }
  };

  // Mock Response
  let statusCalledWith;
  let jsonCalledWith;
  const res = {
    status: (code) => {
      statusCalledWith = code;
      return {
        json: (data) => {
          jsonCalledWith = data;
        }
      };
    },
    json: (data) => {
      // Should not be called directly if status(404) is called
      jsonCalledWith = data;
    }
  };

  // Run Controller
  await getProjectBySlug(ProjectModel)(req, res);

  // Assertions
  assert.strictEqual(statusCalledWith, 404, 'Response status should be 404');
  assert.deepStrictEqual(jsonCalledWith, { msg: 'Project not found' }, 'Response body should match');
});

test('getProjectBySlug should return project if found', async (t) => {
  const mockProject = { title: 'Test Project', slug: 'test-project' };

  // Mock Project Model
  const ProjectModel = {
    findOne: (query) => {
        assert.deepStrictEqual(query, { slug: 'test-project' });
        return Promise.resolve(mockProject);
    }
  };

  const req = { params: { slug: 'test-project' } };

  let jsonCalledWith;
  const res = {
    json: (data) => {
      jsonCalledWith = data;
    },
    status: () => res // return res for chaining if needed
  };

  await getProjectBySlug(ProjectModel)(req, res);

  assert.deepStrictEqual(jsonCalledWith, mockProject);
});
