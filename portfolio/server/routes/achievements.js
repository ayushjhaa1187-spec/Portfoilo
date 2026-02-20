const express = require('express');
const router = express.Router();
const Achievement = require('../models/Achievement');

// @route   GET /api/achievements
// @desc    Get all achievements with pagination
// @access  Public
router.get('/', async (req, res) => {
  try {
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 10;
    const skip = (page - 1) * limit;

    const achievements = await Achievement.find()
      .sort({ date: -1 })
      .skip(skip)
      .limit(limit)
      .lean();

    const total = await Achievement.countDocuments();

    res.json({
      achievements,
      meta: {
        total,
        page,
        pages: Math.ceil(total / limit)
      }
    });
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

module.exports = router;
