# Ayush Kumar Jha - Portfolio

Professional portfolio website for Ayush Kumar Jha, IIT Madras Data Science Scholar & Entrepreneur.

## Architecture

- **Frontend**: Next.js 15 (App Router), Tailwind CSS, Framer Motion.
- **Backend**: Express.js, MongoDB, Mongoose.

## Getting Started

### Prerequisites

- Node.js 18+
- MongoDB instance (local or Atlas)

### Installation

1. Clone the repository.
2. Install dependencies in `client` and `server` directories.

### Running Locally

1. Start Backend:
   ```bash
   cd server
   node server.js
   ```

2. Start Frontend:
   ```bash
   cd client
   # Run the development server
   yarn dev
   ```

3. Visit `http://localhost:3000`.

## Deployment

### Frontend (Vercel)

1. Push to GitHub.
2. Import project in Vercel.
3. Set Root Directory to `client`.
4. Add Environment Variable `NEXT_PUBLIC_API_URL` pointing to your deployed backend.

### Backend (Render/Railway)

1. Push to GitHub.
2. Create a Web Service.
3. Set Root Directory to `server`.
4. Set Build Command: `npm install`
5. Set Start Command: `node server.js`
6. Add Environment Variables: `MONGO_URI`, `PORT`.

## License

MIT
