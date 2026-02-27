export const personalInfo = {
    name: 'Ayush Kumar Jha',
    title: 'Data Scientist | IIT Madras Scholar | Entrepreneur',
    tagline: 'Building AI Solutions at the Intersection of Science & Business',
    email: 'ayushjhaa1187@gmail.com',
    location: 'Ghaziabad, Uttar Pradesh, India',
    github: 'https://github.com/ayushjhaa1187-spec',
    linkedin: 'https://www.linkedin.com/in/ayush-kumar-jha-5960a3362/',
    bio: "I'm Ayush Kumar Jha, a Data Science student at IIT Madras specializing in Machine Learning applications for satellite data and remote sensing. As a finalist at premier IIT competitions and an entrepreneurship intern at IREU School for Startups, I bridge the gap between cutting-edge data science and real-world business impact.",
    philosophy: "I don't just build models — I build solutions that matter. My unique combination of IIT-level data science and entrepreneurial thinking lets me create AI systems that are both technically robust and commercially viable.",
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
    { label: 'Competition Finalist', value: '🏆', description: 'Premier IITs' },
    { label: 'GitHub Projects', value: '17+', description: 'Open Source' },
    { label: 'Startups Ideated', value: '3+', description: 'IREU Track' },
];

export const timeline = [
    {
        year: '2020',
        title: 'Commerce Background',
        desc: 'Started with economics, discovered passion for data and technology. Built a unique foundation combining business acumen with analytical thinking.',
    },
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
        title: 'IREU Entrepreneurship',
        desc: 'Joined the Startup Ideation Track at IREU School for Startups. Validated business ideas with data-driven research and market analysis.',
    },
    {
        year: '2026',
        title: 'IIT Competition Finalist',
        desc: 'Reached the finals at premier IIT-level ideathons and hackathons, competing against 500+ teams with innovative AI solutions.',
    },
    {
        year: 'Present',
        title: 'Building & Learning',
        desc: 'Focusing on ML/AI applications in satellite data, remote sensing, and building startup-ready AI products with real business impact.',
    },
];

export const skillCategories = [
    {
        title: 'Machine Learning & AI',
        icon: '🤖',
        color: '#3B82F6',
        skills: [
            { name: 'Supervised Learning', level: 85 },
            { name: 'Deep Learning', level: 75 },
            { name: 'Computer Vision', level: 80 },
            { name: 'Satellite Data Analysis', level: 75 },
            { name: 'Statistical Modeling', level: 85 },
            { name: 'NLP', level: 65 },
        ],
    },
    {
        title: 'Programming & Tools',
        icon: '💻',
        color: '#10B981',
        skills: [
            { name: 'Python', level: 90 },
            { name: 'NumPy & Pandas', level: 85 },
            { name: 'TensorFlow / PyTorch', level: 75 },
            { name: 'Scikit-learn', level: 85 },
            { name: 'Jupyter & Colab', level: 90 },
            { name: 'SQL', level: 80 },
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

export const projects = [
    {
        slug: 'satellite-data-analysis',
        title: 'Satellite Data Analysis System',
        category: 'ML/AI',
        shortDescription: 'ML models to classify satellite imagery for environmental monitoring with 92% accuracy.',
        fullDescription: 'Developed a comprehensive system using computer vision to analyze satellite imagery. The system detects environmental changes, deforestation patterns, and urban expansion with high accuracy. Uses U-Net architecture for semantic segmentation with a sliding window approach for processing large geotiff images.',
        techStack: ['Python', 'TensorFlow', 'OpenCV', 'Satellite APIs', 'PostgreSQL'],
        metrics: { accuracy: '92%', impact: 'Automated monitoring', speed: '60% faster' },
        githubUrl: 'https://github.com/ayushjhaa1187-spec',
        featured: true,
        icon: '🛰️',
    },
    {
        slug: 'predictive-analytics-dashboard',
        title: 'Predictive Analytics Dashboard',
        category: 'ML/AI',
        shortDescription: 'End-to-end ML pipeline with business insights and interactive visualizations.',
        fullDescription: 'Built a predictive analytics platform that processes historical data to forecast trends. Features an interactive dashboard for stakeholders with real-time predictions, data exploration, and customizable reports.',
        techStack: ['Python', 'Scikit-learn', 'Streamlit', 'PostgreSQL', 'Plotly'],
        metrics: { accuracy: '89%', impact: 'Better decisions', speed: '3x faster' },
        githubUrl: 'https://github.com/ayushjhaa1187-spec',
        featured: true,
        icon: '📊',
    },
    {
        slug: 'startup-idea-validator',
        title: 'Startup Idea Validator',
        category: 'Business',
        shortDescription: 'Data-driven framework for validating startup ideas using market research and ML.',
        fullDescription: 'A comprehensive tool and methodology developed during IREU internship to validate business hypotheses using real-world data. Features automated market analysis, competitor benchmarking, and opportunity scoring.',
        techStack: ['Python', 'Pandas', 'Market Research', 'Business Modeling', 'NLP'],
        metrics: { accuracy: 'N/A', impact: 'Validated 3 ideas', speed: '5x faster' },
        githubUrl: 'https://github.com/ayushjhaa1187-spec',
        featured: true,
        icon: '🚀',
    },
    {
        slug: 'market-analysis-tool',
        title: 'Market Analysis Tool',
        category: 'Business',
        shortDescription: 'Data-driven business intelligence solution combining ML with strategic analysis.',
        fullDescription: 'Automated tool for scraping and analyzing market data to identify gaps and opportunities. Combines web scraping with NLP to extract insights from competitor data and market signals.',
        techStack: ['Python', 'BeautifulSoup', 'NLP', 'Tableau', 'Selenium'],
        metrics: { accuracy: 'N/A', impact: 'Strategic insights', speed: 'Automated' },
        githubUrl: 'https://github.com/ayushjhaa1187-spec',
        featured: false,
        icon: '💼',
    },
    {
        slug: 'healthcare-prediction',
        title: 'Healthcare Prediction Model',
        category: 'ML/AI',
        shortDescription: 'Disease prediction using patient data and ensemble ML classification models.',
        fullDescription: 'Machine learning model to predict disease likelihood based on patient history and symptoms. Uses ensemble methods (Random Forest + XGBoost) with careful feature engineering and cross-validation.',
        techStack: ['Python', 'Scikit-learn', 'Pandas', 'XGBoost', 'Flask'],
        metrics: { accuracy: '94%', impact: 'Early detection', speed: '<100ms' },
        githubUrl: 'https://github.com/ayushjhaa1187-spec',
        featured: false,
        icon: '🏥',
    },
    {
        slug: 'deep-learning-research',
        title: 'CNN for Crop Classification',
        category: 'Research',
        shortDescription: 'Deep learning model for classifying crop types from multi-spectral satellite imagery.',
        fullDescription: 'Research project at IIT Madras exploring CNNs for agricultural monitoring. Uses transfer learning from ResNet50 with custom classification heads for multi-spectral bands including NIR and SWIR.',
        techStack: ['PyTorch', 'Rasterio', 'GDAL', 'Weights & Biases', 'NumPy'],
        metrics: { accuracy: '88%', impact: 'Research contribution', speed: 'Batch processing' },
        githubUrl: 'https://github.com/ayushjhaa1187-spec',
        featured: false,
        icon: '🧠',
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
