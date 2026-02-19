const request = require('supertest');
const mongoose = require('mongoose');
const { MongoMemoryServer } = require('mongodb-memory-server');
const app = require('../../server');
const Project = require('../../models/Project');

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

beforeEach(async () => {
  await Project.deleteMany({});
});

describe('GET /api/projects', () => {
  it('should return all projects', async () => {
    // Seed data
    const project1 = new Project({
      title: 'Project 1',
      slug: 'project-1',
      category: 'Web',
      shortDescription: 'Short desc 1',
      fullDescription: 'Full desc 1',
      techStack: ['React', 'Node'],
      githubUrl: 'http://github.com/1',
      liveUrl: 'http://live.com/1',
    });
    await project1.save();

    const project2 = new Project({
      title: 'Project 2',
      slug: 'project-2',
      category: 'ML/AI',
      shortDescription: 'Short desc 2',
      fullDescription: 'Full desc 2',
      techStack: ['Python', 'TensorFlow'],
      githubUrl: 'http://github.com/2',
      liveUrl: 'http://live.com/2',
    });
    await project2.save();

    const res = await request(app).get('/api/projects');

    expect(res.statusCode).toEqual(200);
    expect(res.body.length).toEqual(2);
    // Order is not guaranteed without sort, but usually insertion order
    // We can check if titles are present
    const titles = res.body.map(p => p.title);
    expect(titles).toContain('Project 1');
    expect(titles).toContain('Project 2');
  });

  it('should handle server errors', async () => {
    // Mock Project.find to throw an error
    jest.spyOn(Project, 'find').mockImplementationOnce(() => {
      throw new Error('Database Error');
    });

    const res = await request(app).get('/api/projects');

    expect(res.statusCode).toEqual(500);
    expect(res.text).toEqual('Server Error');
  });
});
