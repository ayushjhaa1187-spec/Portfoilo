const express = require('express');
const router = express.Router();
const Contact = require('../models/Contact');

// @route   POST /api/contact
// @desc    Submit contact form
// @access  Public
router.post('/', async (req, res) => {
  try {
    // Security enhancement: Prevent mass assignment of sensitive fields like status
    const { name, email, subject, message } = req.body;
    const newContact = new Contact({ name, email, subject, message });
    const contact = await newContact.save();
    res.json({ msg: 'Message sent successfully', contact });
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

module.exports = router;
