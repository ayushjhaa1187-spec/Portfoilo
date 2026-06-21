const express = require('express');
const router = express.Router();
const Contact = require('../models/Contact');

// Basic email regex
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

// @route   POST /api/contact
// @desc    Submit contact form
// @access  Public
router.post('/', async (req, res) => {
  try {
    const { name, email, subject, message } = req.body;

    // Validate required fields
    if (!name || !email || !message) {
      return res.status(400).json({ msg: 'Please provide name, email, and message' });
    }

    // Validate email format
    if (!emailRegex.test(email)) {
      return res.status(400).json({ msg: 'Invalid email format' });
    }

    // Explicitly construct object to prevent mass assignment (e.g., overriding status or createdAt)
    const newContact = new Contact({
      name,
      email,
      subject,
      message,
    });

    await newContact.save();

    // Do not return the full saved contact document to prevent leaking internal fields
    res.json({ msg: 'Message sent successfully' });
  } catch (err) {
    console.error('Contact form submission error:', err.message);
    res.status(500).json({ msg: 'Server Error' });
  }
});

module.exports = router;
