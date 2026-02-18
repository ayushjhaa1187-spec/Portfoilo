const mongoose = require('mongoose');

const ProjectSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  slug: {
    type: String,
    required: true,
    unique: true,
  },
  category: {
    type: String,
    required: true,
    enum: ['ML/AI', 'Business', 'Research', 'Web'],
  },
  shortDescription: {
    type: String,
    required: true,
  },
  fullDescription: {
    type: String,
  },
  techStack: [String],
  githubUrl: String,
  liveUrl: String,
  featured: {
    type: Boolean,
    default: false,
  },
  metrics: {
    accuracy: Number,
    impact: String,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model('Project', ProjectSchema);
