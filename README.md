# Portfolio Website

A modern, professional portfolio website built with Next.js and Express.js.

**Vision**: "The Data Scientist Who Builds Businesses"
**URL**: ayushjha.dev (planned)

## Tech Stack

### Frontend
- **Framework**: Next.js 16 with App Router
- **Styling**: Tailwind CSS + Custom CSS
- **Animations**: Framer Motion
- **HTTP Client**: Axios
- **UI Components**: Lucide React
- **Language**: TypeScript

### Backend
- **Runtime**: Node.js
- **Framework**: Express.js
- **Database**: MongoDB with Mongoose
- **Authentication**: JWT
- **Validation**: Built-in validation middleware
- **Security**: CORS, Rate limiting, Input sanitization

## Project Structure

```
Portfoilo/
├── portfolio/
│   ├── client/          # Next.js frontend
│   │   ├── app/         # App Router pages
│   │   ├── components/  # Reusable React components
│   │   ├── public/      # Static assets
│   │   └── styles/      # CSS modules and globals
│   │
│   └── server/          # Express backend
│       ├── src/
│       │   ├── config/  # Configuration files
│       │   ├── models/  # MongoDB schemas
│       │   ├── routes/  # API endpoints
│       │   └── server.js # Main server file
│       └── package.json
│
├── .github/
│   └── workflows/       # CI/CD pipelines
├── README.md            # This file
└── ROADMAP.md          # Development roadmap
```

## Getting Started

### Prerequisites
- Node.js 20 or higher
- MongoDB (local or Atlas)
- npm or yarn

### Frontend Setup

```bash
cd portfolio/client
npm install
npm run dev
```

The client will run on `http://localhost:3000`

### Backend Setup

```bash
cd portfolio/server
npm install
# Create .env file with necessary variables
npm start
```

The server will run on `http://localhost:5000` (or configured port)

## Environment Variables

### Server (.env)
```
MONGODB_URI=mongodb://localhost:27017/portfolio
MONGODB_DATABASE=portfolio
PORT=5000
JWT_SECRET=your_jwt_secret_key
CORS_ORIGIN=http://localhost:3000
API_KEY=your_api_key_for_protected_endpoints
RATE_LIMIT_WINDOW_MS=15000
RATE_LIMIT_MAX_REQUESTS=100
```

### Client (.env.local)
```
NEXT_PUBLIC_API_URL=http://localhost:5000
```

## Features

- 📱 Fully responsive design
- ⚡ Optimized performance with Next.js
- 🎨 Modern UI with smooth animations
- 🔒 Secure API with authentication
- 📝 Project showcase with filtering
- 📧 Contact form with validation
- 🔐 Admin panel for content management
- 📊 MongoDB-backed data storage

## Pages

- **Home** - Landing page with hero section
- **About** - Personal introduction and timeline
- **Skills** - Technical and professional skills
- **Education** - Educational background
- **Achievements** - Competitions and certifications
- **Projects** - Portfolio of projects with filters
- **Experience** - Work experience timeline
- **Blog** - Articles and technical posts
- **Contact** - Contact form
- **Admin** - Protected admin dashboard

## Deployment

### Frontend Deployment (Vercel)
```bash
npm install -g vercel
cd portfolio/client
vercel
```

### Backend Deployment (Railway/Render)
1. Push code to GitHub
2. Connect repository to deployment service
3. Set environment variables
4. Deploy

## Security Features

- ✅ Input validation and sanitization
- ✅ CORS protection
- ✅ Rate limiting
- ✅ JWT authentication
- ✅ API key protection on sensitive endpoints
- ✅ Mongoose schema validation

## Development

### Running Tests
```bash
cd portfolio/server
npm test
```

### Code Style
- ESLint for linting
- TypeScript for type safety
- Prettier for code formatting (recommended)

## Contributing

This is a personal portfolio project. For suggestions or improvements, feel free to open an issue.

## License

ISC

## Author

Ayush Kumar Jha
IIT Madras | Data Scientist | ML/AI Researcher
