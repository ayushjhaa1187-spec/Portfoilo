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
    if (!name || !email || !message) {
      return res.status(400).json({ msg: 'Please provide name, email, and message' });
    }

    const newContact = new Contact({
      name,
      email,
      subject,
      message,
    });

    const contact = await newContact.save();

    // Do not leak internal data
    res.json({
      msg: 'Message sent successfully',
      contact: {
        id: contact._id,
        name: contact.name,
        email: contact.email,
        subject: contact.subject,
        message: contact.message,
        createdAt: contact.createdAt
      }
    });
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

module.exports = router;
