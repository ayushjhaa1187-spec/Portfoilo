exports.getProjectBySlug = (ProjectModel) => async (req, res) => {
  try {
    const project = await ProjectModel.findOne({ slug: req.params.slug });
    if (!project) {
      return res.status(404).json({ msg: 'Project not found' });
    }
    res.json(project);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
};
