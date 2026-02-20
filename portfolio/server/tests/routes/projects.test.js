const request = require('supertest');
const express = require('express');
const projectsRouter = require('../../routes/projects');
const Project = require('../../models/Project');

// Mock the Project model
jest.mock('../../models/Project');

const app = express();
app.use(express.json());
app.use('/api/projects', projectsRouter);

describe('GET /api/projects', () => {
  let consoleErrorSpy;

  beforeEach(() => {
    // Spy on console.error to suppress error logging during tests
    consoleErrorSpy = jest.spyOn(console, 'error').mockImplementation(() => {});
  });

  afterEach(() => {
    // Restore console.error after each test
    consoleErrorSpy.mockRestore();
    jest.clearAllMocks();
  });

  it('should return 500 status code when database throws error', async () => {
    // Mock the find method to throw an error
    Project.find.mockRejectedValue(new Error('Database Error'));

    const res = await request(app).get('/api/projects');

    expect(res.statusCode).toEqual(500);
    expect(res.text).toEqual('Server Error');
    expect(Project.find).toHaveBeenCalledTimes(1);
    expect(consoleErrorSpy).toHaveBeenCalledWith('Database Error');
  });

  it('should return 200 and list of projects on success', async () => {
    const mockProjects = [{ name: 'Project 1' }, { name: 'Project 2' }];
    Project.find.mockResolvedValue(mockProjects);

    const res = await request(app).get('/api/projects');

    expect(res.statusCode).toEqual(200);
    expect(res.body).toEqual(mockProjects);
    expect(Project.find).toHaveBeenCalledTimes(1);
  });
});
