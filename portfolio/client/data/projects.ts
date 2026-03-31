export const projects = [
  {
    slug: 'satellite-data-analysis',
    title: 'Satellite Data Analysis System',
    category: 'ML/AI',
    shortDescription: 'ML models to classify satellite imagery for environmental monitoring.',
    fullDescription: 'Developed a comprehensive system using computer vision to analyze satellite imagery. The system detects environmental changes, deforestation patterns, and urban expansion with high accuracy.',
    techStack: ['Python', 'TensorFlow', 'OpenCV', 'Satellite APIs', 'PostgreSQL', 'NumPy', 'Pandas'],
    metrics: { accuracy: '92%', impact: 'Automated monitoring' },
    githubUrl: 'https://github.com/ayushjhaa1187-spec/satellite-data-analysis',
    liveUrl: 'https://satellite-mon.vercel.app',
    featured: true
  },
  {
    slug: 'stocksense-agent',
    title: 'Stocksense Agent',
    category: 'ML/AI',
    shortDescription: 'Autonomous AI agent for real-time stock market analysis and predictive reasoning.',
    fullDescription: 'Autonomous AI agent that aggregates real-time market data, performs sentiment analysis, and uses predictive modeling to identify actionable stock market trends.',
    techStack: ['Python', 'LLMs', 'LangGraph', 'Market APIs', 'AsyncIO', 'Pandas'],
    metrics: { accuracy: 'High', impact: 'Real-time Insights' },
    githubUrl: 'https://github.com/ayushjhaa1187-spec/stocksense-agent',
    liveUrl: 'https://stocksense-agent.railway.app',
    featured: true
  },
  {
    slug: 'predictive-analytics-dashboard',
    title: 'Predictive Analytics Dashboard',
    category: 'ML/AI',
    shortDescription: 'End-to-end ML pipeline with business insights and interactive visualizations.',
    fullDescription: 'Built a predictive analytics platform that processes historical data to forecast trends. integrated with a user-friendly dashboard for stakeholders.',
    techStack: ['Python', 'Scikit-learn', 'Streamlit', 'PostgreSQL', 'Plotly', 'Statsmodels'],
    metrics: { accuracy: '89%', impact: 'Improved decision making' },
    githubUrl: 'https://github.com/ayushjhaa1187-spec/predictive-analytics-dashboard',
    liveUrl: 'https://analytics-dash.railway.app',
    featured: true
  },
  {
    slug: 'startup-idea-validator',
    title: 'Startup Idea Validator',
    category: 'Business',
    shortDescription: 'Validated startup ideas using data-driven market research.',
    fullDescription: 'A tool and methodology developed during IREU internship to validate business hypotheses using real-world data and market signals.',
    techStack: ['Python', 'Pandas', 'Market Research', 'Business Modeling', 'NLTK'],
    metrics: { accuracy: 'N/A', impact: 'Validated 3 ideas' },
    githubUrl: 'https://github.com/ayushjhaa1187-spec/startup-idea-validator',
    liveUrl: 'https://validator.vercel.app',
    featured: true
  },
  {
    slug: 'market-analysis-tool',
    title: 'Market Analysis Tool',
    category: 'Business',
    shortDescription: 'Data-driven business intelligence solution combining ML with strategy.',
    fullDescription: 'Automated tool for scraping and analyzing market data to identify gaps and opportunities.',
    techStack: ['Python', 'BeautifulSoup', 'NLP', 'Tableau', 'Selenium'],
    metrics: { accuracy: 'N/A', impact: 'Strategic insights' },
    githubUrl: 'https://github.com/ayushjhaa1187-spec/market-analysis-tool',
    featured: false
  },
  {
    slug: 'healthcare-prediction',
    title: 'Healthcare Prediction Model',
    category: 'ML/AI',
    shortDescription: 'Disease prediction using patient data and ML classification.',
    fullDescription: 'Machine learning model to predict disease likelihood based on patient history and symptoms.',
    techStack: ['Python', 'Scikit-learn', 'Pandas', 'Matplotlib', 'Keras'],
    metrics: { accuracy: '94%', impact: 'Early detection' },
    githubUrl: 'https://github.com/ayushjhaa1187-spec/healthcare-prediction',
    featured: false
  }
];

export const caseStudies = [
  {
    slug: 'satellite-environmental-monitoring',
    title: 'How Satellite Data + ML Can Transform Environmental Monitoring',
    projectSlug: 'satellite-data-analysis',
    challenge: 'Manual analysis of satellite imagery is time-consuming and prone to error.',
    solution: 'Automated deep learning pipeline using CNNs to detect features.',
    results: 'Reduced analysis time by 60% with 92% accuracy.',
    learnings: 'Importance of high-quality training data in remote sensing.'
  }
];
