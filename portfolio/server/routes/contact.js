const express = require('express');
const router = express.Router();
const Contact = require('../models/Contact');

// @route   POST /api/contact
// @desc    Submit contact form
// @access  Public
router.post('/', async (req, res) => {
  try {
    const { name, email, subject, message } = req.body;

    // Input validation
    if (!name || typeof name !== 'string' || name.length > 100) {
      return res.status(400).json({ msg: 'Invalid or missing name' });
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email || typeof email !== 'string' || email.length > 254 || !emailRegex.test(email)) {
      return res.status(400).json({ msg: 'Invalid or missing email' });
    }
    if (subject && (typeof subject !== 'string' || subject.length > 200)) {
      return res.status(400).json({ msg: 'Invalid subject' });
    }
    if (!message || typeof message !== 'string' || message.length > 5000) {
      return res.status(400).json({ msg: 'Invalid or missing message' });
    }

    // Explicitly set properties to avoid mass assignment
    const newContact = new Contact({
      name,
      email,
      subject: subject || '',
      message
    });

    await newContact.save();

    // Don't leak DB document in response
    res.json({ msg: 'Message sent successfully' });
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

module.exports = router;
