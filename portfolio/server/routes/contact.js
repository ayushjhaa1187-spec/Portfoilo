const express = require('express');
const router = express.Router();
const Contact = require('../models/Contact');

// @route   POST /api/contact
// @desc    Submit contact form
// @access  Public
router.post('/', async (req, res) => {
  const { name, email, subject, message } = req.body;

  // Input Validation
  if (!name || !email || !subject || !message) {
    return res.status(400).json({ msg: 'Please include all fields' });
  }

  // Type Checking
  if (typeof name !== 'string' || typeof email !== 'string' || typeof subject !== 'string' || typeof message !== 'string') {
    return res.status(400).json({ msg: 'Invalid input data' });
  }

  // Email Validation (Simple Regex)
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return res.status(400).json({ msg: 'Please include a valid email' });
  }

  // Length Validation
  if (name.length > 100) return res.status(400).json({ msg: 'Name too long (max 100 chars)' });
  if (subject.length > 200) return res.status(400).json({ msg: 'Subject too long (max 200 chars)' });
  if (message.length > 5000) return res.status(400).json({ msg: 'Message too long (max 5000 chars)' });

  // Sanitization (Basic XSS Prevention)
  const escapeHtml = (text) => {
    const map = {
      '&': '&amp;',
      '<': '&lt;',
      '>': '&gt;',
      '"': '&quot;',
      "'": '&#039;'
    };
    return text.replace(/[&<>"']/g, (m) => map[m]);
  };

  try {
    const newContact = new Contact({
      name: escapeHtml(name),
      email: email.toLowerCase(), // Normalize email
      subject: escapeHtml(subject),
      message: escapeHtml(message)
      // Note: status is not destructured, so it cannot be set by user (prevents Mass Assignment)
    });

    const contact = await newContact.save();
    res.json({ msg: 'Message sent successfully', contact });
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

module.exports = router;
