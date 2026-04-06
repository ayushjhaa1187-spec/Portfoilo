const express = require('express');
const router = express.Router();
const Contact = require('../models/Contact');

// @route   POST /api/contact
// @desc    Submit contact form
// @access  Public
router.post('/', async (req, res) => {
  try {
    const { name, email, subject, message } = req.body;

    // Basic input validation
    if (!name || !email || !message) {
      return res.status(400).json({ msg: 'Please provide name, email, and message' });
    }

    // Prevent mass assignment by explicitly defining fields
    const newContact = new Contact({
      name,
      email,
      subject,
      message
    });

    const contact = await newContact.save();

    // Don't leak the full internal object back to the client unnecessarily, but keeping response consistent
    res.json({ msg: 'Message sent successfully', contact });
  } catch (err) {
    console.error('Error saving contact:', err.message);
    res.status(500).send('Server Error');
  }
});

module.exports = router;
