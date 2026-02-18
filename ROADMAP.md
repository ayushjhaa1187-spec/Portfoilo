# Portfolio Roadmap

## Vision
"The Data Scientist Who Builds Businesses"

## FINAL WEBSITE VISION
URL: ayushjha.dev or ayushkumarjha.com
Tagline: "IIT Madras Data Scientist | ML/AI Researcher | Entrepreneurial Innovator"

## SITEMAP
/ (Home)
│
├── /about
├── /education
├── /skills
├── /achievements
│   ├── /competitions
│   └── /certifications
│
├── /projects
│   ├── /ml-ai
│   ├── /business
│   ├── /research
│   └── /[project-slug]
│
├── /case-studies
│   └── /[case-study-slug]
│
├── /experience
├── /research
├── /blog
│   └── /[blog-slug]
│
├── /resume
├── /contact
└── /admin (protected)

## DESIGN SYSTEM
Color Palette:
- Primary: #1E40AF (Deep Blue - IIT Academic)
- Accent: #F97316 (Vibrant Orange - Entrepreneurial)
- Success: #10B981 (Green - Data/Growth)
- Background Light: #F8FAFC
- Background Dark: #0F172A
- Text Primary: #1E293B
- Text Secondary: #64748B

Typography:
- Headings: Inter (Bold, 600-700)
- Body: Inter (Regular, 400-500)
- Code: Fira Code
- Data/Numbers: Poppins (Medium, 500-600)

## TECH STACK
Frontend:
- Framework: Next.js 15 (App Router)
- Styling: Tailwind CSS + Custom CSS
- Animations: Framer Motion + GSAP
- State: React Context / Zustand
- Forms: React Hook Form + Zod
- HTTP: Axios
- Icons: Lucide React
- Charts: Recharts / Chart.js
- Markdown: React Markdown

Backend:
- Runtime: Node.js 20+
- Framework: Express.js
- Database: MongoDB + Mongoose
- Auth: JWT (jsonwebtoken + bcrypt)
- Validation: Joi / Zod
- Email: Nodemailer
- File Upload: Multer + Cloudinary

## FOLDER STRUCTURE
portfolio-backend/
│
├── src/
│   ├── config/
│   ├── models/
│   ├── controllers/
│   ├── routes/
│   ├── middleware/
│   ├── utils/
│   └── server.js
│
├── uploads/
├── .env
├── .gitignore
├── package.json
└── README.md

(Frontend structure implied: Next.js standard)

## DEVELOPMENT PHASES
Phase 1: Foundation (Week 1-2)
- Set up Next.js + Tailwind project
- Design system (colors, fonts, spacing)
- Create reusable components
- Navigation + Footer
- Hero section with animations
- About page with timeline

Phase 2: Core Content (Week 3-4)
- Skills section (interactive)
- Education page
- Achievements page
- Experience page
- Resume page (online + downloadable)

Phase 3: Projects (Week 5-6)
- Projects listing page
- Project filter functionality
- Individual project pages
- Case studies pages
- GitHub API integration

Phase 4: Backend (Week 7-8)
- Set up Express server
- MongoDB connection
- Create all models
- Build API routes
- JWT authentication
- Admin login system

Phase 5: Admin Panel (Week 9)
- Admin dashboard
- Project management (CRUD)
- Blog management (CRUD)
- Contact form management
- Achievement management

Phase 6: Blog System (Week 10)
- Blog listing page
- Individual blog post pages
- Markdown rendering
- Syntax highlighting
- Reading time calculator
- Related posts

Phase 7: Advanced Features (Week 11)
- Contact form with backend
- Email notifications
- Analytics tracking
- Search functionality
- Dark mode toggle
- Loading states

Phase 8: Polish & Optimization (Week 12)
- All animations finalized
- Mobile responsiveness
- Cross-browser testing
- Performance optimization
- SEO implementation
- Accessibility audit

Phase 9: Content Creation (Week 13)
- Write all project descriptions
- Create 3-5 case studies
- Write 5-8 blog posts
- Create resume content
- Take professional photos
- Create graphics/diagrams

Phase 10: Deployment (Week 14)
- Deploy frontend to Vercel
- Deploy backend to Railway
- Set up MongoDB Atlas
- Configure Cloudinary
- Connect custom domain
- SSL certificate
- DNS configuration
- Final testing
- Launch!
