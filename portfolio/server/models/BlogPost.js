const mongoose = require('mongoose');

const BlogPostSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  slug: {
    type: String,
    required: true,
    unique: true,
  },
  content: {
    type: String, // HTML or Markdown
    required: true,
  },
  excerpt: String,
  category: {
    type: String,
    required: true,
  },
  readTime: String,
  author: String,
  date: {
    type: Date,
    default: Date.now,
  },
  featured: {
    type: Boolean,
    default: false,
  },
});

module.exports = mongoose.model('BlogPost', BlogPostSchema);
