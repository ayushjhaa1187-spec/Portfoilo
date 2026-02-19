const mongoose = require('mongoose');
const Project = require('../../models/Project');

describe('Project Model Test', () => {

  // Test valid project
  it('should create a valid project', () => {
    const validProject = new Project({
      title: 'My Project',
      slug: 'my-project',
      category: 'Web',
      shortDescription: 'A short description',
      fullDescription: 'A full description',
      techStack: ['React', 'Node.js'],
      githubUrl: 'https://github.com/user/project',
      liveUrl: 'https://project.com',
      metrics: {
        accuracy: 95,
        impact: 'High',
      }
    });

    const err = validProject.validateSync();
    expect(err).toBeUndefined();
  });

  // Test required fields
  it('should fail validation without required fields', () => {
    const project = new Project({});
    const err = project.validateSync();

    expect(err.errors.title).toBeDefined();
    expect(err.errors.slug).toBeDefined();
    expect(err.errors.category).toBeDefined();
    expect(err.errors.shortDescription).toBeDefined();
  });

  // Test category enum
  it('should fail validation with invalid category', () => {
    const project = new Project({
      title: 'Invalid Category Project',
      slug: 'invalid-category',
      category: 'InvalidCategory',
      shortDescription: 'Desc'
    });

    const err = project.validateSync();
    expect(err.errors.category).toBeDefined();
    expect(err.errors.category.properties.type).toBe('enum');
  });

  // Test default values
  it('should have default values', () => {
    const project = new Project({
      title: 'Default Values Project',
      slug: 'default-values',
      category: 'Web',
      shortDescription: 'Desc'
    });

    expect(project.featured).toBe(false);
    expect(project.createdAt).toBeDefined();
  });

  // Test techStack validation (array of strings)
  it('should allow valid tech stack', () => {
    const project = new Project({
      title: 'Tech Stack Project',
      slug: 'tech-stack',
      category: 'Web',
      shortDescription: 'Desc',
      techStack: ['JS', 'Python']
    });

    const err = project.validateSync();
    expect(err).toBeUndefined();
    expect(project.techStack).toHaveLength(2);
    expect(project.techStack[0]).toBe('JS');
  });
});
