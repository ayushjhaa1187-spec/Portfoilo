const express = require('express');

module.exports = (Contact) => {
  const router = express.Router();

  // @route   POST /api/contact
  // @desc    Submit contact form
  // @access  Public
  router.post('/', async (req, res) => {
    try {
      const newContact = new Contact(req.body);
      const contact = await newContact.save();
      res.json({ msg: 'Message sent successfully', contact });
    } catch (err) {
      console.error(err.message);
      res.status(500).send('Server Error');
    }
  });

  return router;
};
