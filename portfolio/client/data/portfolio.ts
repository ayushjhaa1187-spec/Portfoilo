export const personalInfo = {
    name: 'Ayush Kumar Jha',
    title: 'Data Scientist | Full Stack Developer | IIT Madras Scholar',
    tagline: 'Driven by Data. Scaled by Code. Engineered for the Future.',
    email: 'ayushjhaa1187@gmail.com',
    location: 'Delhi, India',
    github: 'https://github.com/ayushjhaa1187-spec',
    linkedin: 'https://www.linkedin.com/in/ayush-kumar-jha-5960a3362/',
    bio: "I bridge the gap between complex data scholarship at IIT Madras and real-world software execution. With 1,500+ GitHub contributions this year, I don't just study AI—I build production-ready autonomous systems.",
    philosophy: "I build autonomous AI agents and data-driven systems that solve real business bottlenecks. My unique combination of IIT-level data science and full-stack development allows me to engineer solutions from data engineering to frontend execution.",
};

export const animatedTaglines = [
    'Applying Machine Learning to satellite data & remote sensing',
    'Finalist at IIT-level ideathons & hackathons',
    'Bridging data science with entrepreneurial innovation',
    'Building scalable AI solutions with business impact',
    'IIT Madras BS Data Science & Applications Scholar',
];

export const stats = [
    { label: 'IIT Madras Scholar', value: '🎓', description: 'BS Data Science' },
    { label: 'GitHub Contributions', value: '1.5K+', description: 'Past Year' },
    { label: 'Autonomous Agents', value: '🚀', description: 'Production Ready' },
    { label: 'Open Source Projects', value: '17+', description: 'GitHub Repos' },
];

export const timeline = [
    {
        year: '2023',
        title: 'Self-Taught Journey',
        desc: 'Learned Python, ML fundamentals, and statistics independently. Built projects, solved problems, and developed a deep understanding of data science.',
    },
    {
        year: '2025',
        title: 'IIT Madras Admission',
        desc: 'Accepted into the prestigious BS in Data Science & Applications program at IIT Madras, beginning a rigorous academic journey.',
    },
    {
        year: '2025',
        title: 'Full Stack & Hackathons',
        desc: 'Started competing in high-profile hackathons. Expanded skillset to include Next.js, Django, and modern full-stack methodologies alongside data science.',
    },
    {
        year: 'Jan 2026',
        title: 'HackOverflow & JPD Hub',
        desc: 'Active builder in 2026 hackathons. Built the Smart Link Hub at Advitiya x JPD Hub and the Hostel Issue Tracker at HackOverflow 2026.',
    },
    {
        year: 'Feb 2026',
        title: 'Architecting Systems',
        desc: 'Developed the TypeScript-based Insight Weaver ecosystem and Risk-Radar. Transitioned from single scripts to designing multi-repo architectures.',
    },
    {
        year: 'Present',
        title: 'Autonomous Systems & Startups',
        desc: 'Focusing on production-ready AI products like the StockSense AI Agent and validating business models in the IREU Startup Ideation track.',
    },
];

export const skillCategories = [
    {
        title: 'Machine Learning & AI Agents',
        icon: '🤖',
        color: '#00f0ff',
        skills: [
            { name: 'Python', level: 90 },
            { name: 'Autonomous Agents', level: 85 },
            { name: 'Supervised Learning', level: 85 },
            { name: 'Deep Learning', level: 75 },
            { name: 'NLP / Voice Assistants', level: 80 },
            { name: 'Statistical Modeling', level: 85 },
        ],
    },
    {
        title: 'Full Stack Development',
        icon: '💻',
        color: '#39ff14',
        skills: [
            { name: 'TypeScript / JS', level: 85 },
            { name: 'Next.js & React', level: 85 },
            { name: 'Tailwind CSS', level: 90 },
            { name: 'Vercel / Deployment', level: 80 },
            { name: 'HTML/CSS', level: 95 },
            { name: 'SQL / Databases', level: 80 },
        ],
    },
    {
        title: 'Business & Strategy',
        icon: '📊',
        color: '#F97316',
        skills: [
            { name: 'Startup Ideation', level: 85 },
            { name: 'Market Analysis', level: 75 },
            { name: 'Product Strategy', level: 70 },
            { name: 'Business Modeling', level: 80 },
        ],
    },
    {
        title: 'Domain Expertise',
        icon: '🛰️',
        color: '#8B5CF6',
        skills: [
            { name: 'Remote Sensing', level: 75 },
            { name: 'Geospatial Analysis', level: 70 },
            { name: 'Satellite Imagery', level: 75 },
            { name: 'Scientific Computing', level: 70 },
        ],
    },
];

export interface SkillCategory {
    title: string;
    icon: string;
    color: string;
    skills: { name: string; level: number }[];
}

export interface Project {
    slug: string;
    title: string;
    category: string;
    shortDescription: string;
    fullDescription: string;
    techStack: string[];
    metrics: { accuracy: string; impact: string; speed: string };
    githubUrl: string;
    featured: boolean;
    icon: string;
}

export const projects: Project[] = [
    {
        slug: 'stocksense-agent',
        title: 'StockSense AI Agent',
        category: 'Autonomous Agents',
        shortDescription: 'Autonomous AI agent for pharmacy expiry management and inventory optimization.',
        fullDescription: 'Developed a production-ready autonomous AI agent designed explicitly for pharmacies. It constantly monitors inventory flow, predicts stockouts using machine learning models, and autonomously manages expiry tracking to maximize profitability and reduce waste. A prime example of converting data science into an actionable software product.',
        techStack: ['Python', 'AI Agents', 'Data Analysis', 'Automation'],
        metrics: { accuracy: 'High', impact: 'Eliminated Waste', speed: 'Real-time' },
        githubUrl: 'https://github.com/ayushjhaa1187-spec/stocksense-agent',
        featured: true,
        icon: '🏥',
    },
    {
        slug: 'insight-weaver-ecosystem',
        title: 'Insight Weaver Suite',
        category: 'TypeScript / Microservices',
        shortDescription: 'A TypeScript ecosystem for parsing, analyzing, and deploying insights.',
        fullDescription: 'Architected a functional suite of related repositories (including meeting-insights-weaver, comm-parse-pro, and enron-insights-deploy) built heavily with TypeScript. This ecosystem handles data parsing, communication analysis, and seamless deployment of business intelligence insights.',
        techStack: ['TypeScript', 'Node.js', 'Microservices', 'Data Parsing'],
        metrics: { accuracy: 'High', impact: 'Workflow Automation', speed: 'Optimized' },
        githubUrl: 'https://github.com/ayushjhaa1187-spec/insight-weaver',
        featured: true,
        icon: '🕸️',
    },
    {
        slug: 'ethicallancing',
        title: 'Ethicallancing Platform',
        category: 'Full Stack',
        shortDescription: 'A custom frontend platform advocating for fair, transparent, and ethical freelance work.',
        fullDescription: 'Frontend implementation for a platform that advocates for fair and ethical freelance work. The goal is to provide a transparent and accessible environment for freelancers and clients alike, complete with a clean, responsive UI deployed on Vercel.',
        techStack: ['HTML', 'CSS', 'JavaScript', 'Vercel'],
        metrics: { accuracy: 'N/A', impact: 'Community Builder', speed: 'Highly Optimized' },
        githubUrl: 'https://github.com/ayushjhaa1187-spec/ethicallancing',
        featured: true,
        icon: '💻',
    },
    {
        slug: 'voice-assistant',
        title: 'AI Voice Assistant',
        category: 'NLP / Automation',
        shortDescription: 'Interactive Python-based natural language voice assistant for hands-free automation.',
        fullDescription: 'A versatile voice assistant capable of performing various system tasks completely hands-free. Includes functionality for web search, application control, and natural conversation using different speech recognition and TTS engines. Showcases advanced integration of NLP with operating system protocols.',
        techStack: ['Python', 'SpeechRecognition', 'pyttsx3', 'APIs'],
        metrics: { accuracy: 'High', impact: 'Accessibility', speed: 'Fast Execution' },
        githubUrl: 'https://github.com/ayushjhaa1187-spec/Voice-Assistant',
        featured: true,
        icon: '🎙️',
    },
    {
        slug: 'campus-outcomes-mvp',
        title: 'Campus Outcomes MVP',
        category: 'Product MVP',
        shortDescription: 'MVP for placement management and educational analytics.',
        fullDescription: 'Built a Minimum Viable Product for colleges focusing on placement management and tracking data critically relevant for NIRF rankings. Built in competitive environments, demonstrating rapid prototyping skills.',
        techStack: ['HTML', 'CSS', 'JavaScript'],
        metrics: { accuracy: 'N/A', impact: 'Institutional Efficiency', speed: 'Rapid Build' },
        githubUrl: 'https://github.com/ayushjhaa1187-spec/campus-outcomes-mvp',
        featured: false,
        icon: '🏫',
    },
    {
        slug: 'risk-radar',
        title: 'Risk-Radar',
        category: 'Full Stack',
        shortDescription: 'JavaScript-based risk assessment software platform.',
        fullDescription: 'Developed a risk assessment platform designed to identify, analyze, and mitigate potential operational risks. Showcases ability to handle complex logic and state management within a JavaScript ecosystem.',
        techStack: ['JavaScript', 'React', 'State Management'],
        metrics: { accuracy: 'N/A', impact: 'Risk Mitigation', speed: 'High' },
        githubUrl: 'https://github.com/ayushjhaa1187-spec/Risk-Radar',
        featured: false,
        icon: '🎯',
    },
    {
        slug: 'hostel-issue-tracker',
        title: 'Hostel Issue Tracking System',
        category: 'Full Stack',
        shortDescription: 'Full-stack application for efficient college hostel management.',
        fullDescription: 'Engineered a full-stack solution to streamline hostel issue reporting and tracking, developed during HackOverflow 2026. Prioritizes clean UI and robust backend routing for quick issue resolution.',
        techStack: ['JavaScript', 'HTML5', 'CSS3', 'Node.js'],
        metrics: { accuracy: 'N/A', impact: 'Improved student life', speed: 'Real-time' },
        githubUrl: 'https://github.com/ayushjhaa1187-spec/hostel-issue-tracking-system',
        featured: false,
        icon: '🏢',
    },
    {
        slug: 'predictive-analytics-dashboard',
        title: 'Predictive Analytics Dashboard',
        category: 'ML/AI',
        shortDescription: 'End-to-end ML pipeline with business insights and interactive visualizations.',
        fullDescription: 'Built a predictive analytics platform that processes historical data to forecast trends. Features an interactive dashboard for stakeholders with real-time predictions, data exploration, and customizable reports.',
        techStack: ['Python', 'Scikit-learn', 'Streamlit', 'PostgreSQL', 'Plotly'],
        metrics: { accuracy: '89%', impact: 'Better decisions', speed: '3x faster' },
        githubUrl: 'https://github.com/ayushjhaa1187-spec/predictive-analytics-dashboard',
        featured: true,
        icon: '📊',
    },
];

export const caseStudies = [
    {
        slug: 'satellite-environmental-monitoring',
        title: 'How Satellite Data + ML Can Transform Environmental Monitoring',
        projectSlug: 'satellite-data-analysis',
        category: 'Environment',
        date: 'Feb 2026',
        challenge: 'Manual analysis of satellite imagery is time-consuming and prone to error. Environmental agencies struggle to process petabytes of daily data to detect deforestation or illegal mining activities in real-time.',
        approach: 'We hypothesized that a CNN could identify specific environmental features with high accuracy. We collected 10,000 labeled satellite images from Sentinel-2 and preprocessed them to handle cloud cover and atmospheric noise using Sen2Cor.',
        implementation: 'The solution involved a U-Net architecture for semantic segmentation. Trained on AWS using PyTorch with mixed precision. We implemented a sliding window approach to process large-scale geotiff images and a post-processing pipeline for noise reduction.',
        results: 'The automated system achieved 92% accuracy compared to expert analysis. It reduced the time to generate a report for a 100 sq km area from 3 days to 4 hours — a 60% reduction in overall workflow time.',
        learnings: 'High-quality labeled data is more critical than model complexity in remote sensing. Handling different sensor resolutions required robust normalization techniques. Cloud masking was the hardest engineering challenge.',
    },
];

export const achievements = [
    {
        title: 'IIT Ideathon Finalist 2025',
        desc: 'Top 10 out of 500+ teams. Presented an AI-driven solution for sustainable agriculture using satellite data and computer vision.',
        icon: '🥇',
        category: 'Competition',
        color: '#3B82F6',
    },
    {
        title: 'IIT Hackathon — Top 10',
        desc: 'Developed a real-time remote sensing application for disaster management. Recognized for innovative use of ML and geospatial data.',
        icon: '🥈',
        category: 'Competition',
        color: '#3B82F6',
    },
    {
        title: 'IREU Startup Ideation Completion',
        desc: 'Successfully validated 3+ startup ideas through rigorous market research, customer interviews, and business modeling at IREU School for Startups.',
        icon: '🚀',
        category: 'Startup',
        color: '#F97316',
    },
    {
        title: 'IIT Madras Data Science Scholar',
        desc: 'Maintaining academic excellence in the rigorous BS in Data Science & Applications program at IIT Madras.',
        icon: '🎓',
        category: 'Academic',
        color: '#10B981',
    },
];

export const experiences = [
    {
        role: 'Entrepreneurship Intern',
        company: 'IREU School for Startups',
        period: 'Startup Ideation Track',
        desc: [
            'Completed intensive entrepreneurship program focusing on problem validation and market-fit analysis.',
            'Developed 3+ business ideas with data-driven market research and customer discovery.',
            'Created business model canvases, financial projections, and go-to-market strategies.',
            'Pitched to industry experts, mentors, and received actionable feedback for iteration.',
        ],
        color: '#F97316',
        icon: '🚀',
    },
    {
        role: 'Data Science Student & Researcher',
        company: 'Indian Institute of Technology Madras',
        period: '2025 – Present',
        desc: [
            'Pursuing BS in Data Science & Applications with focus on ML/AI and statistical modeling.',
            'Working on ML/AI projects in satellite data analysis and remote sensing applications.',
            'Participating in research initiatives on crop classification using multi-spectral imagery.',
            'Building production-ready ML systems with end-to-end pipelines.',
        ],
        color: '#3B82F6',
        icon: '🎓',
    },
    {
        role: 'IIT Competition Participant',
        company: 'Various Premier IITs',
        period: '2025 – 2026',
        desc: [
            'Finalist at premier IIT Ideathon with AI-driven sustainable agriculture solution.',
            'Top 10 at IIT Hackathon with real-time disaster management application.',
            'Competed against 500+ teams nationwide with innovative ML solutions.',
            'Built end-to-end solutions combining ML/AI with business strategy.',
        ],
        color: '#10B981',
        icon: '🏆',
    },
];

export const researchAreas = [
    {
        title: 'Machine Learning for Satellite Data',
        desc: 'Investigating advanced CNN architectures for processing multi-spectral satellite imagery to detect environmental changes, deforestation, and urban expansion.',
        icon: '🛰️',
    },
    {
        title: 'Remote Sensing & Geospatial Intelligence',
        desc: 'Developing algorithms to analyze geospatial data for urban planning, precision agriculture, and natural disaster management.',
        icon: '🌍',
    },
    {
        title: 'AI for Environmental Monitoring',
        desc: 'Building deep learning models to track deforestation, water quality degradation, and air pollution using multi-temporal earth observation data.',
        icon: '🤖',
    },
    {
        title: 'Computer Vision for Earth Observation',
        desc: 'Applying state-of-the-art object detection and semantic segmentation techniques to high-resolution aerial and satellite imagery.',
        icon: '📡',
    },
];

export const blogPosts = [
    {
        slug: 'satellite-ml-agriculture',
        title: 'How Satellite Data + ML Can Transform Agriculture',
        excerpt: 'Exploring the potential of remote sensing for crop yield prediction, precision farming, and sustainable agriculture using machine learning.',
        category: 'ML/AI',
        date: 'Feb 15, 2026',
        readTime: '8 min read',
        content: `## The Future of Precision Agriculture

Precision agriculture is revolutionizing how we grow food. By leveraging satellite imagery and machine learning, farmers can now monitor crop health, soil moisture, and pest infestations with unprecedented accuracy.

## The Role of Remote Sensing

Satellites like Sentinel-2 and Landsat provide multispectral data that goes far beyond visible light. Indices like NDVI (Normalized Difference Vegetation Index) allow us to assess plant vigor at scale. The key advantage is temporal resolution — we can track changes over growing seasons.

The data pipeline typically involves:
- Downloading imagery from Copernicus Open Access Hub
- Atmospheric correction using Sen2Cor
- Cloud masking and compositing
- Feature extraction for ML models

## Machine Learning Models

We can train CNNs to segment fields and classify crop types with remarkable accuracy. Time-series analysis using LSTMs can predict yield based on historical growth patterns and weather data. The most promising approaches combine:

1. **Transfer Learning**: Pre-trained models like ResNet50 adapted for multi-spectral bands
2. **Temporal Fusion**: Combining multiple time-steps to capture growth dynamics
3. **Ensemble Methods**: Stacking spatial and temporal models for robust predictions

## Business Impact

For a medium-sized farm, optimizing fertilizer application based on satellite data can reduce costs by 20% while increasing yield by 15%. The ROI is significant even for small deployments.`,
        featured: true,
    },
    {
        slug: 'iit-ideation-to-product',
        title: 'From IIT Ideation to Product: My Startup Journey',
        excerpt: 'Lessons learned from validating startup ideas during the IREU entrepreneurship track and competing at premier IIT hackathons.',
        category: 'Startups',
        date: 'Feb 10, 2026',
        readTime: '6 min read',
        content: `## The Beginning

Participating in the IREU School for Startups was a transformative experience. It taught me that a great technical solution is worthless without a viable business model. This is the story of how that realization shaped my approach.

## Validating the Problem

We started with a hypothesis: "Small businesses struggle with inventory management." We interviewed 50+ shop owners across different cities to validate this before writing a single line of code. The insights were surprising:

- 70% of small retailers still use manual tracking
- The main pain point wasn't technology — it was trust
- Price sensitivity was extreme: solutions needed to cost under ₹200/month

## The MVP Approach

Instead of building a full-fledged app, we created a simple WhatsApp chatbot to test engagement. The results were promising — 40% of pilot users continued using it after 2 weeks.

## Lessons Learned

1. **Fall in love with the problem, not the solution.** We pivoted 3 times before finding the right approach.
2. **Data beats opinion.** Every assumption should be validated with real users.
3. **Speed of execution matters more than perfection.** Ship fast, learn faster.
4. **The business model IS the product.** Technical excellence alone doesn't create value.`,
        featured: true,
    },
    {
        slug: 'business-side-of-data-science',
        title: "The Business Side of Data Science: What Models Don't Tell You",
        excerpt: 'Why understanding business context is just as important as model accuracy — insights from a data scientist with entrepreneurial experience.',
        category: 'Business',
        date: 'Jan 28, 2026',
        readTime: '5 min read',
        content: `## Beyond Accuracy

As data scientists, we often obsess over accuracy, precision, and recall. But business stakeholders care about ROI, time-to-market, and scalability. Learning to bridge this gap has been one of the most valuable skills in my journey.

## The Translation Layer

One of the most valuable skills I've learned is translating technical metrics into business outcomes:

- Instead of: "The model has 90% accuracy"
- Say: "This model will reduce manual review time by 50%, saving 200 hours per month"

## Choosing the Right Metric

Sometimes, a false positive is more expensive than a false negative. Understanding the cost matrix is crucial for alignment with business goals:

- In fraud detection, a false negative (missed fraud) costs 100x more than a false positive
- In medical diagnosis, sensitivity matters more than specificity
- In marketing, precision determines ad spend efficiency

## The Commerce Advantage

My background in commerce has been unexpectedly valuable. Understanding P&L statements, unit economics, and market dynamics helps me frame data science problems in terms that drive business adoption.`,
        featured: false,
    },
    {
        slug: 'why-commerce-students-great-data-scientists',
        title: 'Why Commerce Students Make Great Data Scientists',
        excerpt: 'The unconventional path from commerce to cutting-edge data science — and why diverse backgrounds create better problem solvers.',
        category: 'Learning',
        date: 'Jan 15, 2026',
        readTime: '4 min read',
        content: `## The Unconventional Path

When I tell people I went from commerce to data science at IIT Madras, the reaction is usually surprise. But I've come to believe this unconventional path is actually an advantage.

## Business Intuition

Commerce students develop an intuitive understanding of business mechanics — supply, demand, margins, cash flows. This translates directly into better problem framing for data science projects.

## Statistical Foundation

Commerce programs include statistics, econometrics, and quantitative methods. These are the same fundamentals that underpin machine learning — just applied in different contexts.

## The Bridging Skill

The tech industry desperately needs people who can translate between technical and business teams. Data scientists with business backgrounds naturally fill this gap.

## My Advice

If you're from a non-traditional background considering data science:
1. Your unique perspective is your superpower
2. Focus on fundamentals (math, statistics, programming)
3. Leverage your domain knowledge — it's what makes you different
4. Build projects that showcase the intersection of your skills`,
        featured: false,
    },
];

export const education = [
    {
        institution: 'Indian Institute of Technology Madras',
        degree: 'BS in Data Science & Applications',
        period: '2025 – 2029',
        focusAreas: ['Machine Learning & AI', 'Satellite Data Analysis', 'Statistical Modeling', 'Business Applications of DS'],
        coursework: ['ML Foundations', 'Deep Learning', 'Neural Networks', 'Statistical Methods', 'Data Structures', 'Business Analytics'],
        color: '#1E40AF',
        description: 'Chose IIT Madras Data Science over NIT after qualifying JEE Mains 2025 and narrowly missing JEE Advanced cut-off by 16 marks.'
    },
    {
        institution: 'High School (Class 12th)',
        degree: 'PCM + Computer Science',
        period: '2024',
        focusAreas: ['Physics', 'Chemistry', 'Mathematics', 'Computer Science'],
        coursework: ['Advanced Mathematics', 'Programming fundamentals', 'Physics experiments'],
        color: '#3B82F6',
        description: 'Qualified JEE Mains 2025. Wrote JEE Advanced but left by 16 marks. Built strong logical and analytical foundations through PCM+CS.'
    },
    {
        institution: 'IREU School for Startups',
        degree: 'Entrepreneurship Intern — Startup Ideation Track',
        period: '2025',
        focusAreas: ['Business Model Validation', 'Market Analysis & Research', 'Pitch Deck Development', 'Startup Ecosystem'],
        coursework: [],
        color: '#F97316',
    },
];

export const currentFocus = [
    '🛰️ ML Applications in Satellite Data',
    '🧠 Deep Learning & Computer Vision',
    '💼 Data-Driven Business Strategy',
    '🚀 Building Startup-Ready AI Products',
];
