const express = require('express');
const router = express.Router();
const Achievement = require('../models/Achievement');

// @route   GET /api/achievements
// @desc    Get all achievements
// @access  Public
router.get('/', async (req, res) => {
  try {
    // ⚡ Bolt Performance Optimization
    // Using .lean() for read-only queries bypasses Mongoose document instantiation,
    // reducing memory usage and making queries ~3-5x faster
    const achievements = await Achievement.find().lean();
    res.json(achievements);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

module.exports = router;
