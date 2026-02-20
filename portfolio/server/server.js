const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const connectDB = require('./config/db');
const rateLimit = require('./middleware/rateLimiter');

dotenv.config();

// Validate required environment variables in production
if (process.env.NODE_ENV === 'production') {
  if (!process.env.MONGO_URI) {
    console.error('ERROR: MONGO_URI environment variable is not set in production');
    process.exit(1);
  }
}

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Rate Limiting
const apiLimiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100,
  message: 'Too many requests from this IP, please try again after 15 minutes'
});

const contactLimiter = rateLimit({
  windowMs: 60 * 60 * 1000, // 1 hour
  max: 5,
  message: 'Too many contact form submissions from this IP, please try again after an hour'
});

app.use('/api/', apiLimiter);
app.use('/api/contact', contactLimiter);

// Connect to Database
connectDB();

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

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
