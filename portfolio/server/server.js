const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const morgan = require('morgan');
const rateLimit = require('express-rate-limit');
const connectDB = require('./config/db');

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Logging
app.use(morgan('dev'));

// Middleware
app.use(cors());
app.use(express.json());

// Rate Limiting (Spam protection for contact form)
const contactLimiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 5, // Limit each IP to 5 requests per window
  message: { error: 'Too many contact requests from this IP, please try again after 15 minutes' }
});

// Connect to Database
connectDB();

// Basic Route
app.get('/api/health', (req, res) => {
  res.json({ status: 'OK', message: 'API is healthy' });
});

// Import Routes
const projectRoutes = require('./routes/projects');
const contactRoutes = require('./routes/contact');
const achievementRoutes = require('./routes/achievements');
const blogRoutes = require('./routes/blog');

// Use Routes
app.use('/api/projects', projectRoutes);
app.use('/api/contact', contactLimiter, contactRoutes);
app.use('/api/achievements', achievementRoutes);
app.use('/api/blog', blogRoutes);

// 404 Handler
app.use((req, res) => {
  res.status(404).json({ error: 'Route not found' });
});

// Global Error Handler
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({
    error: 'Internal Server Error',
    message: process.env.NODE_ENV === 'development' ? err.message : 'Something went wrong'
  });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
