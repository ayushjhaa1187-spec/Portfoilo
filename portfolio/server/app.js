const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');

dotenv.config();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Basic Route
app.get('/', (req, res) => {
  res.send('API is running...');
});

// Import Routes
const projectRoutes = require('./routes/projects');
const contactRoutes = require('./routes/contact');
const achievementRoutes = require('./routes/achievements');
const blogRoutes = require('./routes/blog');

// Use Routes
app.use('/api/projects', projectRoutes);
app.use('/api/contact', contactRoutes);
app.use('/api/achievements', achievementRoutes);
app.use('/api/blog', blogRoutes);

module.exports = app;
