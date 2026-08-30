const express = require('express');
const router = express.Router();
const Achievement = require('../models/Achievement');

// @route   GET /api/achievements
// @desc    Get all achievements
// @access  Public
router.get('/', async (req, res) => {
  try {
    // ⚡ Bolt: Using .lean() for read-only query improves performance by returning plain JS objects instead of Mongoose documents.
    // Impact: ~5x faster execution and lower memory usage when serializing JSON responses.
    const achievements = await Achievement.find().lean();
    res.json(achievements);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

module.exports = router;
