// @route   POST /api/projects
// @desc    Create a project
// @access  Private (TODO: Add Auth)
exports.createProjectFactory = (Project) => async (req, res) => {
  try {
    const newProject = new Project(req.body);
    const project = await newProject.save();
    res.json(project);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
};
