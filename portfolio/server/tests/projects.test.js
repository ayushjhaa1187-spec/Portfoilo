const request = require('supertest');
const mongoose = require('mongoose');
const { MongoMemoryServer } = require('mongodb-memory-server');
const app = require('../app');
const Project = require('../models/Project');

let mongoServer;

beforeAll(async () => {
  mongoServer = await MongoMemoryServer.create();
  const uri = mongoServer.getUri();
  await mongoose.connect(uri);
});

afterAll(async () => {
  await mongoose.disconnect();
  await mongoServer.stop();
});

afterEach(async () => {
  await Project.deleteMany({});
});

describe('GET /api/projects', () => {
  it('should return 200 and an empty array when no projects exist', async () => {
    const res = await request(app).get('/api/projects');
    expect(res.status).toBe(200);
    expect(res.body).toEqual([]);
  });

  it('should return 200 and a list of projects when projects exist', async () => {
    const projectData = {
      title: 'Test Project',
      slug: 'test-project',
      category: 'Web',
      shortDescription: 'A test project',
      fullDescription: 'This is a test project',
      techStack: ['Node.js', 'React'],
      githubUrl: 'https://github.com/test',
      liveUrl: 'https://test.com',
      featured: true,
      metrics: {
        accuracy: 95,
        impact: 'High'
      }
    };
    await Project.create(projectData);

    const res = await request(app).get('/api/projects');
    expect(res.status).toBe(200);
    expect(res.body.length).toBe(1);
    expect(res.body[0].title).toBe('Test Project');
    expect(res.body[0].slug).toBe('test-project');
  });

  it('should handle database errors gracefully', async () => {
    // Mock Project.find to throw an error
    jest.spyOn(Project, 'find').mockRejectedValue(new Error('Database Error'));

    const res = await request(app).get('/api/projects');
    expect(res.status).toBe(500);
    expect(res.text).toBe('Server Error');

    // Restore the mock
    Project.find.mockRestore();
  });
});
