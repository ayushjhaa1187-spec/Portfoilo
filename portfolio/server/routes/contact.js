const express = require('express');
const router = express.Router();
const Contact = require('../models/Contact');

// @route   POST /api/contact
// @desc    Submit contact form
// @access  Public
router.post('/', async (req, res) => {
  try {
    // 🛡️ Sentinel: Prevent Mass Assignment by explicitly destructuring allowed fields
    const { name, email, subject, message } = req.body;

    // 🛡️ Sentinel: Basic validation for required fields
    if (!name || !email || !message) {
      return res.status(400).json({ msg: 'Please provide name, email, and message' });
    }

    const newContact = new Contact({
      name,
      email,
      subject,
      message
    });

    const contact = await newContact.save();
    res.json({ msg: 'Message sent successfully', contact });
  } catch (err) {
    // 🛡️ Sentinel: Don't leak error details to the client
    console.error('Error in contact route:', err.message);
    res.status(500).send('Server Error');
  }
});

module.exports = router;
