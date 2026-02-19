const { body } = require('express-validator');

const validateContact = [
  body('name')
    .notEmpty().withMessage('Name is required')
    .trim()
    .escape(),
  body('email')
    .isEmail().withMessage('Please include a valid email')
    .normalizeEmail(),
  body('message')
    .notEmpty().withMessage('Message is required')
    .trim()
    .escape(),
  body('subject')
    .optional()
    .trim()
    .escape()
];

module.exports = validateContact;
