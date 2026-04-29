const express = require('express');
const router = express.Router();
const Contact = require('../models/Contact');

// @route   POST /api/contact
// @desc    Submit contact form
// @access  Public
router.post('/', async (req, res) => {
  try {
    // 🛡️ Sentinel: Prevent Mass Assignment Vulnerability
    // Explicitly destructure only allowed fields to prevent malicious users
    // from injecting restricted fields (e.g., 'status', 'admin', 'role') into the database model.
    const { name, email, subject, message } = req.body;
    const newContact = new Contact({
      name,
      email,
      subject,
      message
    });
    const contact = await newContact.save();
    res.json({ msg: 'Message sent successfully', contact });
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

module.exports = router;
