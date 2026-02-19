const express = require('express');
const router = express.Router();
const { validationResult, matchedData } = require('express-validator');
const Contact = require('../models/Contact');
const validateContact = require('../middleware/contactValidation');

// @route   POST /api/contact
// @desc    Submit contact form
// @access  Public
router.post('/', validateContact, async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  try {
    const data = matchedData(req);
    const newContact = new Contact(data);
    const contact = await newContact.save();
    res.json({ msg: 'Message sent successfully', contact });
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

module.exports = router;
