<div align="center">
  <h1>Ayush Kumar Jha - Portfolio</h1>

  [![Next.js](https://img.shields.io/badge/Next.js-15-black?style=for-the-badge&logo=next.js)](https://nextjs.org/)
  [![Node.js](https://img.shields.io/badge/Node.js-20+-green?style=for-the-badge&logo=node.js)](https://nodejs.org/)
  [![Express.js](https://img.shields.io/badge/Express.js-Backend-blue?style=for-the-badge&logo=express)](https://expressjs.com/)
  [![MongoDB](https://img.shields.io/badge/MongoDB-Database-47A248?style=for-the-badge&logo=mongodb)](https://www.mongodb.com/)
  [![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-Styling-38B2AC?style=for-the-badge&logo=tailwind-css)](https://tailwindcss.com/)
  [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg?style=for-the-badge)](https://opensource.org/licenses/MIT)
</div>

---

## Short Description
A professional portfolio website for Ayush Kumar Jha, an IIT Madras Data Science Scholar, ML/AI Researcher, and Entrepreneur. It features a modern, interactive frontend and a robust backend to manage projects, case studies, achievements, and blog posts.

---

## Demo / Screenshot

*(Placeholder for project screenshot or GIF demonstrating the smooth Framer Motion animations and responsive design)*

```html
<!-- <img src="screenshot.png" alt="Portfolio Dashboard Demo" width="100%"> -->
```

---

## Features

- **Modern UI/UX**: Fully responsive, mobile-first design built with Next.js 15 App Router and Tailwind CSS.
- **Smooth Animations**: Interactive elements and page transitions powered by Framer Motion.
- **RESTful API Backend**: Express.js server managing Projects, Achievements, Blog Posts, and Contact messages.
- **Database Driven**: MongoDB integration using Mongoose for structured data handling and optimized queries.
- **Secure Architecture**: API Key authentication for protected routes and security-focused middleware.
- **Accessible Design**: ARIA labels, focus states, and semantic HTML for comprehensive accessibility.

---

## Tech Stack

### Frontend
- **Framework**: [Next.js 15](https://nextjs.org/) (App Router, React 19)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/)
- **Animations**: [Framer Motion](https://www.framer.com/motion/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Language**: [TypeScript](https://www.typescriptlang.org/)

### Backend
- **Runtime**: [Node.js](https://nodejs.org/)
- **Framework**: [Express.js](https://expressjs.com/)
- **Database**: [MongoDB](https://www.mongodb.com/) with [Mongoose](https://mongoosejs.com/)
- **Other Tools**: CORS, Dotenv, Nodemon

---

## Project Structure

```text
portfolio/
├── client/                # Next.js 15 Frontend
│   ├── app/               # App Router pages (about, projects, blog, etc.)
│   ├── components/        # Reusable UI components (Hero, Navbar, Footer)
│   ├── data/              # Static or mock data
│   ├── public/            # Static assets (images, icons)
│   ├── package.json       # Frontend dependencies and scripts
│   └── next.config.ts     # Next.js configuration
│
└── server/                # Express.js Backend
    ├── config/            # Database and environment configurations
    ├── models/            # Mongoose schemas (Project, Contact, Achievement, BlogPost)
    ├── routes/            # API endpoints (projects, contact, achievements, blog)
    ├── server.js          # Express app entry point
    └── package.json       # Backend dependencies and scripts
```

---

## Prerequisites

Before you begin, ensure you have the following installed:
- [Node.js](https://nodejs.org/) (v18 or higher recommended, specifically v20+)
- [pnpm](https://pnpm.io/) (Strictly required for package management; do not use npm or yarn)
- [MongoDB](https://www.mongodb.com/try/download/community) (Local instance or MongoDB Atlas URI)

---

## Installation & Setup

### 1. Clone the repository
```bash
git clone https://github.com/yourusername/portfolio.git
cd portfolio
```

### 2. Setup Backend
```bash
cd server
pnpm install

# Create a .env file and add your MongoDB connection string and port
echo "PORT=5000" > .env
echo "MONGO_URI=mongodb://localhost:27017/portfolio" >> .env
echo "ADMIN_API_KEY=your_secure_api_key_here" >> .env
```

### 3. Setup Frontend
Open a new terminal window:
```bash
cd portfolio/client
pnpm install

# Create a .env.local file to point to your backend API
echo "NEXT_PUBLIC_API_URL=http://localhost:5000/api" > .env.local
```

---

## Usage

### Running Locally

**Start the Backend API:**
```bash
cd portfolio/server
pnpm run start
# Note: If nodemon isn't configured in scripts, use: npx nodemon server.js
```
The backend API runs on `http://localhost:5000`.

**Start the Next.js Frontend:**
```bash
cd portfolio/client
pnpm run dev
```
Open your browser and navigate to `http://localhost:3000` to view the frontend.

---

## Environment Variables

### Backend (`server/.env`)
| Variable | Description | Example Value |
|----------|-------------|---------------|
| `PORT` | Port for the Express server | `5000` |
| `MONGO_URI` | Connection string for MongoDB | `mongodb://localhost:27017/portfolio` |
| `ADMIN_API_KEY` | Secret key for authenticated API routes | `super_secret_key_123` |

### Frontend (`client/.env.local`)
| Variable | Description | Example Value |
|----------|-------------|---------------|
| `NEXT_PUBLIC_API_URL` | Base URL for the backend API | `http://localhost:5000/api` |

---

## API Reference

Base URL: `http://localhost:5000/api`

### Projects
| Method | Endpoint | Description | Auth Required |
|--------|----------|-------------|---------------|
| `GET` | `/projects` | Get all projects | No |
| `GET` | `/projects/:slug` | Get a specific project by slug | No |
| `POST` | `/projects` | Create a new project | Yes (`x-api-key`) |

### Contact
| Method | Endpoint | Description | Auth Required |
|--------|----------|-------------|---------------|
| `POST` | `/contact` | Submit a contact form message | No |

### Achievements & Blog
| Method | Endpoint | Description | Auth Required |
|--------|----------|-------------|---------------|
| `GET` | `/achievements` | Get all achievements | No |
| `GET` | `/blog` | Get all blog posts | No |

---

## Configuration

- **Next.js**: Modify `portfolio/client/next.config.ts` for routing, image domains, and build settings.
- **Tailwind CSS**: Customize your design system, colors, and fonts natively supported by Tailwind v4.
- **ESLint**: Adjust rules in `portfolio/client/eslint.config.mjs` (Note: JSX quote escaping is strictly enforced).

---

## Contributing

Contributions are welcome! Please follow these steps:

1. **Fork** the repository.
2. **Create** a new branch (`git checkout -b feature/AmazingFeature`).
3. **Make** your changes (ensure you use `pnpm` exclusively and run linting/build checks).
4. **Commit** your changes (`git commit -m "Add some AmazingFeature"`).
5. **Push** to the branch (`git push origin feature/AmazingFeature`).
6. **Open** a Pull Request.

*Note: Please ensure all code changes pass ESLint rules (especially around unescaped quotes in JSX) and verify accessibility standards.*

---

## License

This project is licensed under the [MIT License](https://opensource.org/licenses/MIT).

---

## Acknowledgements

- Built using the amazing [Next.js](https://nextjs.org/) App Router.
- Animations powered by [Framer Motion](https://www.framer.com/motion/).
- Icons provided by [Lucide React](https://lucide.dev/).
