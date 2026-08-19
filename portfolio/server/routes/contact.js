const express = require('express');
const router = express.Router();
const Contact = require('../models/Contact');

const { check, validationResult } = require('express-validator');

// @route   POST /api/contact
// @desc    Submit contact form
// @access  Public
router.post(
  '/',
  [
    check('name', 'Name is required').not().isEmpty(),
    check('email', 'Please include a valid email').isEmail(),
    check('message', 'Message is required').not().isEmpty(),
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    try {
      const newContact = new Contact(req.body);
      const contact = await newContact.save();
      res.json({ msg: 'Message sent successfully', contact });
    } catch (err) {
      console.error(err.message);
      res.status(500).json({ error: 'Server Error' });
    }
  }
);

module.exports = router;
