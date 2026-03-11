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
      return res.status(400).json({ msg: 'Please enter all required fields' });
    }

    // Explicit extraction prevents mass assignment vulnerabilities
    const newContact = new Contact({
      name,
      email,
      subject,
      message
    });

    await newContact.save();

    // Explicitly define success response to prevent leaking internal DB fields
    res.json({ msg: 'Message sent successfully' });
  } catch (err) {
    console.error('Contact submission error');
    // Don't leak details in error response
    res.status(500).send('Server Error');
  }
});

module.exports = router;
