const express = require('express');
const router = express.Router();
const Achievement = require('../models/Achievement');

// @route   GET /api/achievements
// @desc    Get all achievements
// @access  Public
router.get('/', async (req, res) => {
  try {
    // ⚡ Bolt: Appended .lean() to Mongoose query to return plain JS objects, bypassing Mongoose document instantiation. Expected performance impact: Faster query execution and reduced memory footprint.
    const achievements = await Achievement.find().lean();
    res.json(achievements);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

module.exports = router;
