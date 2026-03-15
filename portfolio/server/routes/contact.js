const express = require('express');
const router = express.Router();
const Contact = require('../models/Contact');

// @route   POST /api/contact
// @desc    Submit contact form
// @access  Public
router.post('/', async (req, res) => {
  try {
    // Prevent mass assignment by explicitly selecting allowed fields
    const { name, email, subject, message } = req.body;

    // Basic validation
    if (!name || !email || !message) {
      return res.status(400).json({ msg: 'Please provide all required fields' });
    }

    const newContact = new Contact({ name, email, subject, message });
    await newContact.save();

    // Do not return raw mongoose document to prevent leaking internal database fields
    res.json({ msg: 'Message sent successfully' });
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

module.exports = router;
