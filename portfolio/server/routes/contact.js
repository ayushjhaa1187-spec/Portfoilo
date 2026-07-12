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
      return res.status(400).json({ msg: 'Please provide all required fields' });
    }

    // Explicitly select fields to prevent mass assignment (e.g. status)
    const newContact = new Contact({
      name,
      email,
      subject,
      message,
    });

    const contact = await newContact.save();
    res.json({ msg: 'Message sent successfully', contact });
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

module.exports = router;
