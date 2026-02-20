const express = require('express');
const router = express.Router();
const Project = require('../models/Project');
const logger = require('../utils/logger');

// @route   GET /api/projects
// @desc    Get all projects
// @access  Public
router.get('/', async (req, res) => {
  try {
    const projects = await Project.find();
    res.json(projects);
  } catch (err) {
    logger.error(err.message);
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
    logger.error(err.message);
    res.status(500).send('Server Error');
  }
});

// @route   POST /api/projects
// @desc    Create a project
// @access  Private (TODO: Add Auth)
router.post('/', async (req, res) => {
  try {
    const newProject = new Project(req.body);
    const project = await newProject.save();
    res.json(project);
  } catch (err) {
    logger.error(err.message);
    res.status(500).send('Server Error');
  }
});

module.exports = router;
