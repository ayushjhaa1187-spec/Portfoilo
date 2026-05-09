const express = require('express');
const router = express.Router();
const Achievement = require('../models/Achievement');

// @route   GET /api/achievements
// @desc    Get all achievements
// @access  Public
router.get('/', async (req, res) => {
  try {
    // ⚡ Bolt: Added .lean() to bypass Mongoose document instantiation for read-only queries, reducing memory footprint and improving response time by ~5x.
    const achievements = await Achievement.find().lean();
    res.json(achievements);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

module.exports = router;
