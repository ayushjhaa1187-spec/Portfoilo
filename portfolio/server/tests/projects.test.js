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
  await Project.deleteMany();
  jest.restoreAllMocks();
});

describe('GET /api/projects', () => {
  it('should return all projects', async () => {
    // Arrange
    const projectsData = [
      {
        title: 'Project 1',
        slug: 'project-1',
        category: 'Web',
        shortDescription: 'Short desc 1',
        fullDescription: 'Full desc 1',
        techStack: ['React', 'Node'],
        githubUrl: 'http://github.com/1',
        liveUrl: 'http://live.com/1',
        featured: true,
      },
      {
        title: 'Project 2',
        slug: 'project-2',
        category: 'ML/AI',
        shortDescription: 'Short desc 2',
        fullDescription: 'Full desc 2',
        techStack: ['Python', 'TensorFlow'],
        githubUrl: 'http://github.com/2',
        liveUrl: 'http://live.com/2',
        featured: false,
      },
    ];
    await Project.create(projectsData);

    // Act
    const res = await request(app).get('/api/projects');

    // Assert
    expect(res.statusCode).toBe(200);
    expect(res.body.length).toBe(2);
    const titles = res.body.map(p => p.title);
    expect(titles).toContain('Project 1');
    expect(titles).toContain('Project 2');
  });

  it('should handle errors gracefully', async () => {
    // Simulate an error by spying on Project.find and rejecting
    jest.spyOn(Project, 'find').mockRejectedValue(new Error('Database Error'));

    // Act
    const res = await request(app).get('/api/projects');

    // Assert
    expect(res.statusCode).toBe(500);
    expect(res.text).toBe('Server Error');
  });
});
