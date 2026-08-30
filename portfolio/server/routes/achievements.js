const express = require('express');
const router = express.Router();
const Achievement = require('../models/Achievement');

// @route   GET /api/achievements
// @desc    Get all achievements
// @access  Public
router.get('/', async (req, res) => {
  try {
    // ⚡ Bolt: Added .lean() to bypass full Mongoose document instantiation for read-only queries
    // Expected impact: ~3-5x faster execution and reduced memory usage
    const achievements = await Achievement.find().lean();
    res.json(achievements);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

module.exports = router;
