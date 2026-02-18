const mongoose = require('mongoose');

const AchievementSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  desc: {
    type: String,
    required: true,
  },
  icon: String,
  color: String,
  date: Date,
  category: {
    type: String,
    enum: ['Competition', 'Academic', 'Startup'],
  },
  featured: {
    type: Boolean,
    default: false,
  },
});

module.exports = mongoose.model('Achievement', AchievementSchema);
