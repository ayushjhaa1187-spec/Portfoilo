const express = require('express');
const router = express.Router();
const Contact = require('../models/Contact');

// @route   POST /api/contact
// @desc    Submit contact form
// @access  Public
router.post('/', async (req, res) => {
  try {
    const { name, email, subject, message } = req.body;

    // Prevent mass assignment by only allowing specific fields
    const newContact = new Contact({
      name,
      email,
      subject,
      message
    });

    await newContact.save();

    // Do not echo the raw Mongoose document to prevent leaking internal database fields
    res.json({ msg: 'Message sent successfully' });
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

module.exports = router;
