const express = require('express');
const router = express.Router();
const Contact = require('../models/Contact');

// @route   POST /api/contact
// @desc    Submit contact form
// @access  Public
router.post('/', async (req, res) => {
  try {
    const { name, email, subject, message } = req.body;

    if (!name || typeof name !== 'string' || name.trim() === '') {
      return res.status(400).json({ msg: 'Valid name is required' });
    }
    if (!email || typeof email !== 'string' || !/^\S+@\S+\.\S+$/.test(email)) {
      return res.status(400).json({ msg: 'Valid email is required' });
    }
    if (!message || typeof message !== 'string' || message.trim() === '') {
      return res.status(400).json({ msg: 'Message is required' });
    }

    const newContact = new Contact({
      name: name.trim(),
      email: email.trim().toLowerCase(),
      subject: typeof subject === 'string' ? subject.trim() : '',
      message: message.trim()
    });

    await newContact.save();
    res.json({ msg: 'Message sent successfully' });
  } catch (err) {
    console.error('Contact submission error');
    res.status(500).send('Server Error');
  }
});

module.exports = router;
