const express = require('express');
const router = express.Router();
const Contact = require('../models/Contact');

// @route   POST /api/contact
// @desc    Submit contact form
// @access  Public
router.post('/', async (req, res) => {
  try {
    // SECURITY: Prevent mass assignment by explicitly destructuring allowed fields
    const { name, email, subject, message } = req.body;
    const newContact = new Contact({ name, email, subject, message });

    await newContact.save();

    // SECURITY: Prevent data leakage by not echoing the saved document back to the client
    res.json({ msg: 'Message sent successfully' });
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

module.exports = router;
