const express = require('express');
const router = express.Router();
const Project = require('../models/Project');
const { createProjectFactory } = require('../controllers/projectController');

// Create the controller instance by injecting the model
const createProject = createProjectFactory(Project);

// @route   GET /api/projects
// @desc    Get all projects
// @access  Public
router.get('/', async (req, res) => {
  try {
    const projects = await Project.find();
    res.json(projects);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

// @route   GET /api/projects/:slug
// @desc    Get project by slug
// @access  Public
router.get('/:slug', async (req, res) => {
  try {
    const project = await Project.findOne({ slug: req.params.slug });
    if (!project) {
      return res.status(404).json({ msg: 'Project not found' });
    }
    res.json(project);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

// @route   POST /api/projects
// @desc    Create a project
// @access  Private (TODO: Add Auth)
router.post('/', createProject);

module.exports = router;
