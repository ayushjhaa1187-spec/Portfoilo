const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const connectDB = require('./config/db');

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

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

if (require.main === module) {
  // Connect to Database
  connectDB();

  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
}

module.exports = app;
