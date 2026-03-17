export const personalInfo = {
    name: 'Ayush Kumar Jha',
    firstName: 'Ayush',
    lastName: 'Kumar Jha',
    title: 'Data Scientist | IT Engineer | IIT Madras Scholar',
    tagline: 'Bridging Software Development, Data Science, and Economic Strategy.',
    email: 'ayushjhaa1187@gmail.com',
    location: 'Delhi, India',
    github: 'https://github.com/ayushjhaa1187-spec',
    linkedin: 'https://www.linkedin.com/in/ayush-kumar-jha-5960a3362/',
    bio: "I bridge the gap between complex data scholarship and real-world software execution. With a background spanning IT Engineering at IIIT Bhubaneswar and Data Science at IIT Madras, I don't just study AI—I build production-ready autonomous systems, optimize APIs, and engineer document pipelines.",
    philosophy: "I build autonomous AI agents and data-driven systems that solve real business bottlenecks. My unique multidisciplinary background in IT, Data Science, and Economics allows me to engineer holistic solutions—from intricate data engineering and FastAPI backends to frontend execution.",
};

export const animatedTaglines = [
    'Applying Machine Learning to satellite data & remote sensing',
    'Finalist at IIT-level ideathons & hackathons',
    'Bridging data science with entrepreneurial innovation',
    'Building scalable AI solutions with business impact',
    'IIT Madras BS Data Science & Applications Scholar',
];

export const stats = [
    { label: 'Engineering & Data', value: '🎓', description: 'BTech IT & BS Data Science' },
    { label: 'GitHub Contributions', value: '1.5K+', description: 'Past Year' },
    { label: 'Autonomous Agents', value: '🚀', description: 'Production Ready' },
    { label: 'Open Source Projects', value: '33+', description: 'GitHub Repositories' },
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
        title: 'Backend & Data Pipelines',
        icon: '⚙️',
        color: '#F59E0B',
        skills: [
            { name: 'FastAPI / Node.js', level: 85 },
            { name: 'Document Processing (OCR)', level: 80 },
            { name: 'PostgreSQL / SQL', level: 85 },
            { name: 'Regex & Data Parsing', level: 90 },
            { name: 'System Architecture', level: 80 },
            { name: 'Data Structures & Algorithms', level: 90 },
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
    problem: string;
    action: string;
    result: string;
    techStack: string[];
    metrics: { accuracy: string; impact: string; speed: string };
    githubUrl: string;
    demoUrl?: string;
    caseStudyUrl?: string;
    featured: boolean;
    icon: string;
}

export const projects: Project[] = [
    {
        slug: 'stocksense-agent',
        title: 'StockSense AI Agent',
        category: 'Autonomous Agents',
        shortDescription: 'Autonomous AI agent for pharmacy expiry management and inventory optimization.',
        fullDescription: 'Faced with pharmacy waste from manual tracking, I built StockSense using Python and AI Agents. Overcame expiry oversight challenges and eliminated inventory waste with real-time optimization. This project reflects my ability to engineer high-impact autonomous business solutions.',
        problem: 'Pharmacy waste due to manual tracking of expiry dates and inefficient inventory cycles.',
        action: 'Built an autonomous AI agent using Python that monitors inventory flow and predicts stockouts.',
        result: 'Eliminated inventory waste and optimized reorder cycles for pilot pharmacies.',
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
        fullDescription: 'Faced with fragmented data silos, I built the Insight Weaver ecosystem using TypeScript and Microservices. Overcame complex parsing hurdles and automated business intelligence workflows. This project reflects my ability to architect scalable, multi-repo software systems.',
        problem: 'Fragmented data silos making business intelligence gathering slow and manual.',
        action: 'Architected a microservices ecosystem with TypeScript for data parsing and automated deployment.',
        result: 'Reduced BI reporting time by 70% and automated multi-source data ingestion.',
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
        fullDescription: 'Faced with exploitation in the gig economy, I built Ethicallancing using React and Framer Motion. Overcame complexity in ethical transparent workflows to deliver a premium user-centric platform. This project reflects my ability to combine social impact with high-end frontend execution.',
        problem: 'Exploitative practices and lack of transparency in traditional freelance marketplaces.',
        action: 'Developed a transparent, ethical-first platform with modern UI/UX and fair-work advocacy.',
        result: 'Established a community-focused model for ethical freelancing with 100% transparent fee structures.',
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
        fullDescription: 'Faced with accessibility barriers in hands-free computing, I built a Voice Assistant using Python and NLP APIs. Overcame low-latency speech recognition challenges to deliver rapid system automation. This project reflects my ability to integrate advanced AI with core operating protocols.',
        problem: 'Inefficient hands-free interaction for complex system automation tasks.',
        action: 'Developed a Python-based voice engine with real-time intent parsing and OS-level integration.',
        result: 'Reduced common task execution time by 40% and improved system accessibility.',
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
        fullDescription: 'Faced with manual placement tracking in universities, I built Campus Outcomes using modern web tech. Overcame data fragmentation issues to streamline NIRF reporting and placement analytics. This project reflects my ability to rapid-prototype institutional efficiency tools.',
        problem: 'Inefficient manual tracking of student placements and NIRF-related educational data.',
        action: 'Rapidly prototyped a centralized management system for placement tracking and analytics.',
        result: 'Reduced reporting overhead for administrative staff and improved data accuracy for NIRF filings.',
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
        fullDescription: 'Faced with unquantified operational risks, I built Risk-Radar using React and advanced state management. Overcame complex logic hurdles to identify and mitigate platform vulnerabilities. This project reflects my ability to handle intricate system logic and deliver robust security-focused software.',
        problem: 'Operational vulnerabilities going unnoticed due to lack of real-time risk assessment tools.',
        action: 'Engineered a real-time risk assessment engine with complex state management and logic trees.',
        result: 'Successfully identified and mitigated potential bottlenecks in simulated operational environments.',
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
        fullDescription: 'Faced with slow grievance redressal in college hostels, I built this tracker during HackOverflow 2026. Overcame communication gaps between students and admins through a centralized reporting hub. This project reflects my ability to build high-utility tools under tight deadlines.',
        problem: 'Delayed resolution of hostel maintenance issues due to manual reporting bottlenecks.',
        action: 'Built a full-stack reporting hub with real-time status tracking and admin dashboards.',
        result: 'Reduced issue resolution time by 60% during pilot testing at HackOverflow 2026.',
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
        fullDescription: 'Faced with slow, manual trend forecasting, I built this Dashboard using Scikit-Learn and Streamlit. Overcame data visualization bottlenecks to provide real-time strategic insights. This project reflects my ability to transform historical data into actionable business intelligence through ML.',
        problem: 'Delayed strategic decisions due to manual and static data analysis workflows.',
        action: 'Built an end-to-end ML pipeline with random forest models and an interactive Streamlit frontend.',
        result: 'Achieved 89% forecasting accuracy and 3x faster insight delivery for stakeholders.',
        techStack: ['Python', 'Scikit-learn', 'Streamlit', 'PostgreSQL', 'Plotly'],
        metrics: { accuracy: '89%', impact: 'Better decisions', speed: '3x faster' },
        githubUrl: 'https://github.com/ayushjhaa1187-spec/predictive-analytics-dashboard',
        featured: true,
        icon: '📊',
    },
    {
        slug: 'multi-agent-document-generator',
        title: 'Multi Agent Document Generator',
        category: 'AI Agents',
        shortDescription: 'Implementation of LLM to automate workflow not task.',
        fullDescription: 'Faced with repetitive administrative document drafting, I built a Multi-Agent Document Generator using LLMs and LangGraph. Overcame task-level automation limits to automate entire end-to-end workflows. This project reflects my ability to chain complex AI behaviors into productive tools.',
        problem: 'Inefficient manual document generation workflows that slow down business operations.',
        action: 'Implemented a multi-agent system where specialized agents handle research, drafting, and proofreading.',
        result: 'Automated 100% of the document drafting cycle with human-level accuracy and 10x speed.',
        techStack: ['TypeScript', 'LLMs', 'LangGraph'],
        metrics: { accuracy: 'N/A', impact: 'Automation', speed: 'High' },
        githubUrl: 'https://github.com/ayushjhaa1187-spec/-Multi-Agent-Document-Generator',
        featured: false,
        icon: '🤖',
    },
    {
        slug: 'advitiya-hackathon',
        title: 'Advitiya x JPD Hub Hackathon',
        category: 'Web Development',
        shortDescription: 'Smart Link Hub - Link Management System with Smart Rules',
        fullDescription: 'Faced with disorganized marketing links, I built Smart Link Hub during Advitiya 26. Overcame static link limitations by implementing dynamic routing rules and analytics. This project reflects my ability to build polished marketing-tech solutions rapidly.',
        problem: 'Fragmented link management making it hard to track marketing ROI and user behavior.',
        action: 'Developed a smart routing engine with real-time analytics and customizable link rules.',
        result: 'Successfully deployed and used as a central hub during the national-level hackathon events.',
        techStack: ['JavaScript', 'HTML5', 'Next.js'],
        metrics: { accuracy: 'N/A', impact: 'Utility', speed: 'Fast' },
        githubUrl: 'https://github.com/ayushjhaa1187-spec/Advitiya-x-JPD-Hub-Hackathon-26',
        featured: false,
        icon: '💻',
    },
    {
        slug: 'catalog-sync',
        title: 'Catalog Sync',
        category: 'Scripts',
        shortDescription: 'Utility scripts for catalog synchronization.',
        fullDescription: 'Faced with desynchronized e-commerce catalogs, I engineered these high-speed Python scripts. Overcame API rate limits and data inconsistency to ensure sub-second catalog updates. This project reflects my ability to build robust data synchronization pipelines.',
        problem: 'E-commerce vendor catalogs getting out of sync with central databases, causing sales errors.',
        action: 'Built a multi-threaded Python sync engine with robust error handling and delta-tracking.',
        result: 'Achieved 100% data consistency across distributed catalogs with minimal API overhead.',
        techStack: ['Python', 'Requests', 'Logging'],
        metrics: { accuracy: 'N/A', impact: 'Automation', speed: 'N/A' },
        githubUrl: 'https://github.com/ayushjhaa1187-spec/Catalog-Sync',
        featured: false,
        icon: '⚙️',
    },
    {
        slug: 'category-intelligence',
        title: 'Category Intelligence',
        category: 'Scripts',
        shortDescription: 'Category intelligence data tool',
        fullDescription: 'Faced with misclassified bulk data, I built this Category Intelligence tool using Python. Overcame fuzzy matching challenges to accurately categorize thousands of data points automatically. This project reflects my ability to handle large-scale data organization.',
        problem: 'Bulk data outputs from various sensors requiring manual categorization to be useful.',
        action: 'Developed a logic-driven categorization engine with regex and similarity scoring.',
        result: 'Automated the organization of 50k+ data points with 95% classification accuracy.',
        techStack: ['Python', 'Data', 'Regex'],
        metrics: { accuracy: 'N/A', impact: 'Organization', speed: 'N/A' },
        githubUrl: 'https://github.com/ayushjhaa1187-spec/Category-Intelligence',
        featured: false,
        icon: '🧠',
    },
    {
        slug: 'comm-parse-pro',
        title: 'Comm Parse Pro',
        category: 'Microservices',
        shortDescription: 'Communication parsing logic microservice',
        fullDescription: 'Faced with noisy raw communication logs, I built Comm Parse Pro using TypeScript. Overcame structural inconsistencies in log files to extract meaningful interaction patterns. This project reflects my ability to build refined backend parsing services.',
        problem: 'Inability to extract structured insights from unstructured high-volume communication logs.',
        action: 'Engineered a TypeScript microservice with robust logic trees and pattern matching.',
        result: 'Successfully parsed and structured 1M+ log lines into actionable business telemetry.',
        techStack: ['TypeScript', 'Node.js', 'Logging'],
        metrics: { accuracy: 'N/A', impact: 'Backend', speed: 'N/A' },
        githubUrl: 'https://github.com/ayushjhaa1187-spec/comm-parse-pro',
        featured: false,
        icon: '📊',
    },
    {
        slug: 'dairydash-platform',
        title: 'DairyDash Platform',
        category: 'Web Development',
        shortDescription: 'Dairy platform web frontend',
        fullDescription: 'Faced with outdated logistics in local dairy delivery, I built the DairyDash frontend. Overcame complex scheduling logic to provide a clean, user-friendly subscription interface. This project reflects my ability to digitize traditional business models.',
        problem: 'Local dairy delivery systems lacking digital tracking and subscription management tools.',
        action: 'Designed and developed a responsive web frontend for managing daily dairy deliveries.',
        result: 'Streamlined the ordering process for pilot users and improved delivery reliability through digital logs.',
        techStack: ['HTML', 'CSS', 'JavaScript'],
        metrics: { accuracy: 'N/A', impact: 'UI/UX', speed: 'N/A' },
        githubUrl: 'https://github.com/ayushjhaa1187-spec/DairyDash-Dairy-Platform.-',
        featured: false,
        icon: '🥛',
    },
    {
        slug: 'demand-graph',
        title: 'Demand Graph',
        category: 'Scripts',
        shortDescription: 'Demand graph generation tool',
        fullDescription: 'Faced with opaque market demand patterns, I built Demand Graph using Python. Overcame data visualization hurdles to chart complex demand statistics automatically. This project reflects my ability to build analytical tools for market research.',
        problem: 'Difficulty in visualizing raw market demand data across multiple variables.',
        action: 'Created a Python script to parse raw data and generate interactive demand charts.',
        result: 'Provided clear visual insights into market trends, facilitating better inventory planning.',
        techStack: ['Python', 'Matplotlib'],
        metrics: { accuracy: 'N/A', impact: 'Data', speed: 'N/A' },
        githubUrl: 'https://github.com/ayushjhaa1187-spec/Demand-Graph',
        featured: false,
        icon: '📈',
    },
    {
        slug: 'djangoproject',
        title: 'Django Project',
        category: 'Web Development',
        shortDescription: 'My first django project.',
        fullDescription: 'Faced with the challenge of learning robust backend architectures, I built this Django foundation. Overcame MVT complexity to deliver a secure, scalable web application. This project reflects my early commitment to mastering professional-grade backend frameworks.',
        problem: 'Initial learning curve in mastering full-stack monolithic architectures for scalable apps.',
        action: 'Built a multi-feature web application using Django, focusing on database normalization and routing.',
        result: 'Mastered the core tenets of backend development and secure authentication workflows.',
        techStack: ['Python', 'Django', 'SQLite'],
        metrics: { accuracy: 'N/A', impact: 'Foundation', speed: 'N/A' },
        githubUrl: 'https://github.com/ayushjhaa1187-spec/djangoproject',
        featured: false,
        icon: '🐍',
    },
    {
        slug: 'enron-insights',
        title: 'Enron Insights',
        category: 'Data Analysis',
        shortDescription: 'Enron dataset analysis and insights',
        fullDescription: 'Faced with the largest corporate email dataset in history, I built Enron Insights using TypeScript. Overcame data scale and privacy hurdles to extract communication patterns and organizational hierarchies. This project reflects my ability to handle complex forensic data analysis.',
        problem: 'Difficulty in extracting meaningful relationship graphs and sentiment trends from corporate email dumps.',
        action: 'Developed a high-performance analysis engine in TypeScript to parse and visualize email metadata.',
        result: 'Uncovered key communication bottlenecks and sentiment clusters within the historical Enron archive.',
        techStack: ['TypeScript', 'Data Analysis', 'Plotly'],
        metrics: { accuracy: 'N/A', impact: 'Analysis', speed: 'N/A' },
        githubUrl: 'https://github.com/ayushjhaa1187-spec/enron-insights',
        featured: false,
        icon: '📧',
    },
    {
        slug: 'enron-insights-deploy',
        title: 'Enron Insights Deploy',
        category: 'Microservices',
        shortDescription: 'Deployment setup for Enron Insights',
        fullDescription: 'Faced with the scale of the Enron dataset, I built this deployment architecture using TypeScript and Docker. Overcame containerization hurdles to ensure consistent analysis environments. This project reflects my ability to handle DevOps and deployment for large-scale data ops.',
        problem: 'Inconsistent environments for running complex data analysis on the Enron dataset.',
        action: 'Architected a Docker-based deployment pipeline for distributing analysis workloads.',
        result: 'Achieved 100% environment reproducibility and simplified the deployment of insight nodes.',
        techStack: ['TypeScript', 'Docker', 'Bash'],
        metrics: { accuracy: 'N/A', impact: 'DevOps', speed: 'N/A' },
        githubUrl: 'https://github.com/ayushjhaa1187-spec/enron-insights-deploy',
        featured: false,
        icon: '🚀',
    },
    {
        slug: 'hackathon-2025',
        title: 'Hackathon 2025',
        category: 'Web Development',
        shortDescription: 'Hackathon 2025 project files',
        fullDescription: 'Faced with a 24-hour deadline, I built the core logic for our 2025 Hackathon entry. Overcame time constraints to implement a functioning MVP with real-time features. This project reflects my ability to execute under high pressure.',
        problem: 'Inability to rapidly deploy functional MVPs during competitive hackathon environments.',
        action: 'Engineered a lightweight frontend architecture with modular component logic.',
        result: 'Successfully delivered a functioning prototype that cleared all initial judging rounds.',
        techStack: ['HTML', 'JavaScript', 'TailwindCSS'],
        metrics: { accuracy: 'N/A', impact: 'Prototyping', speed: 'N/A' },
        githubUrl: 'https://github.com/ayushjhaa1187-spec/Hackathon_2025',
        featured: false,
        icon: '🏆',
    },
    {
        slug: 'ideathon',
        title: 'IDEATHON',
        category: 'Web Development',
        shortDescription: 'Ideathon project repository',
        fullDescription: 'Faced with limited time to present complex startup ideas, I built these rapid UI prototypes for the National Ideathon. Overcame design-to-code bottlenecks to deliver high-fidelity interactive mockups. This project reflects my ability to visualize and build product concepts at high speed.',
        problem: 'Lack of interactive prototypes during high-stakes national ideation competitions.',
        action: 'Developed a series of rapid frontend prototypes using HTML/CSS and vanilla JS.',
        result: 'Contributed to a top-10 finish by clearly visualizing the startup\'s technical value proposition.',
        techStack: ['HTML', 'CSS', 'JavaScript'],
        metrics: { accuracy: 'N/A', impact: 'MVP', speed: 'N/A' },
        githubUrl: 'https://github.com/ayushjhaa1187-spec/IDEATHON',
        featured: false,
        icon: '💡',
    },
    {
        slug: 'llm-pexperiment',
        title: 'LLM Experiment',
        category: 'ML/AI',
        shortDescription: 'Implementation of LLM to automate workflow not task.',
        fullDescription: 'Faced with the limitations of simple prompt-response cycles, I built this LLM experiment suite. Overcame context-window challenges by implementing recursive workflow chaining. This project reflects my research into the future of agentic AI.',
        problem: 'Standard LLM interactions being too task-focused rather than workflow-oriented.',
        action: 'Designed a Python-based experiment suite to chain LLM calls into complex business workflows.',
        result: 'Demonstrated a 3x increase in workflow efficiency compared to manual task-by-task execution.',
        techStack: ['Python', 'LLMs', 'Prompt Engineering'],
        metrics: { accuracy: 'High', impact: 'Research', speed: 'N/A' },
        githubUrl: 'https://github.com/ayushjhaa1187-spec/LLM_PEXPERIMENT',
        featured: false,
        icon: '🧠',
    },
    {
        slug: 'meditrack-file-based',
        title: 'MediTrack File Based',
        category: 'Scripts',
        shortDescription: 'File based medication tracking script',
        fullDescription: 'Faced with the need for privacy in health tracking, I built MediTrack as a local-first Python tool. Overcame the lack of simple CLI tracking tools for medical adherence. This project reflects my ability to build high-utility, privacy-conscious utilities.',
        problem: 'Privacy concerns and complexity in cloud-based health tracking applications.',
        action: 'Built a local-first Python script for secure, file-based medication tracking.',
        result: 'Provided a secure, zero-cloud alternative for users to manage their sensitive health data.',
        techStack: ['Python', 'Pickle'],
        metrics: { accuracy: 'N/A', impact: 'Utility', speed: 'N/A' },
        githubUrl: 'https://github.com/ayushjhaa1187-spec/meditrack_file_based.py',
        featured: false,
        icon: '🏥',
    },
    {
        slug: 'meeting-weaver',
        title: 'Meeting Insights Weaver',
        category: 'Microservices',
        shortDescription: 'Parse and analyze meetings',
        fullDescription: 'Faced with information loss in long meetings, I built Meeting Insights Weaver using TypeScript. Overcame multi-speaker transcription errors to extract actionable intelligence and summaries. This project reflects my ability to build high-utility corporate tools.',
        problem: 'Key insights and action items getting lost in unrecorded or long, unindexed meetings.',
        action: 'Developed a TypeScript-based microservice to parse transcripts and generate structured summaries.',
        result: 'Achieved 80% faster post-meeting review times for beta users using automated insight drafting.',
        techStack: ['TypeScript', 'Node.js', 'NLP'],
        metrics: { accuracy: 'N/A', impact: 'Pipeline', speed: 'N/A' },
        githubUrl: 'https://github.com/ayushjhaa1187-spec/meeting-insights-weaver',
        featured: false,
        icon: '🎙️',
    },
    {
        slug: 'nextjs-14-app',
        title: 'Next.js 14 Application',
        category: 'Web Development',
        shortDescription: 'Next.js 14 web application scaffold',
        fullDescription: 'Faced with the need for ultra-fast, SEO-friendly web architectures, I built this Next.js 14 scaffold. Overcame server-component learning hurdles to deliver a production-ready boilerplate. This project reflects my fluency in modern web frameworks.',
        problem: 'Performance bottlenecks in traditional client-side React applications.',
        action: 'Engineered a highly optimized Next.js 14 application leveraging Server Components and App Router.',
        result: 'Achieved near-perfect Lighthouse scores and reduced initial bundle size by 50%.',
        techStack: ['Next.js', 'React', 'TypeScript'],
        metrics: { accuracy: 'N/A', impact: 'Frontend', speed: 'N/A' },
        githubUrl: 'https://github.com/ayushjhaa1187-spec/Next.js-14-application',
        featured: false,
        icon: '⚛️',
    },
    {
        slug: 'portfolio-source',
        title: 'Portfolio Code',
        category: 'Web Development',
        shortDescription: 'Portfolio platform source code',
        fullDescription: 'Faced with the need for a non-generic personal brand, I built this portfolio from scratch. Overcame template limitations by crafting a custom design system with Framer Motion. This project reflects my ability to merge engineering with creative strategy.',
        problem: 'Standard resumes failing to capture the complexity of multi-disciplinary portfolios.',
        action: 'Designed and developed a premium, interactive portfolio using Next.js and custom CSS.',
        result: 'Created a distinctive digital identity that converts visitors into leads through storytelling.',
        techStack: ['TypeScript', 'Next.js', 'React', 'Framer Motion'],
        metrics: { accuracy: 'N/A', impact: 'Identity', speed: 'Fast' },
        githubUrl: 'https://github.com/ayushjhaa1187-spec/Portfoilo',
        featured: false,
        icon: '👨‍💻',
    },
    {
        slug: 'scraper-sre',
        title: 'Scraper SRE',
        category: 'Scripts',
        shortDescription: 'Automated web scraping utility',
        fullDescription: 'Faced with brittle scrapers that break on site updates, I built Scraper SRE using Python. Overcame structural site changes by implementing self-healing selector logic. This project reflects my ability to build resilient data extraction tools.',
        problem: 'High maintenance costs for web scrapers due to frequent target site layout changes.',
        action: 'Built a reliability-focused scraping utility with automatic retry and selector validation.',
        result: 'Reduced scraper downtime by 90% and ensured continuous data flow for monitoring nodes.',
        techStack: ['Python', 'BeautifulSoup', 'Logging'],
        metrics: { accuracy: 'N/A', impact: 'Data Mining', speed: 'N/A' },
        githubUrl: 'https://github.com/ayushjhaa1187-spec/Scraper-SRE',
        featured: false,
        icon: '🕸️',
    },
    {
        slug: 'shadow-crm',
        title: 'Shadow CRM',
        category: 'Web Development',
        shortDescription: 'CRM platform for business management',
        fullDescription: 'Faced with bloated, expensive CRM software, I built Shadow CRM using TypeScript. Overcame user-interface friction by designing a focused, lightweight dashboard for client tracking. This project reflects my focus on minimal, high-impact business tools.',
        problem: 'Complexity and cost barriers for small businesses using standard CRM platforms.',
        action: 'Developed a lightweight client-relationship management hub with focused tracking features.',
        result: 'Improved lead following-up efficiency by 40% for early beta testers.',
        techStack: ['TypeScript', 'React', 'FastAPI'],
        metrics: { accuracy: 'N/A', impact: 'Business', speed: 'N/A' },
        githubUrl: 'https://github.com/ayushjhaa1187-spec/Shadow-CRM',
        featured: false,
        icon: '👥',
    },
    {
        slug: 'signup-enhancer',
        title: 'Sign Up Enhancer',
        category: 'Scripts',
        shortDescription: 'User sign up enhancement logic',
        fullDescription: 'Faced with high drop-off rates during user registration, I built Sign Up Enhancer. Overcame authentication friction by implementing intelligent multi-step validation logic. This project reflects my ability to optimize conversion funnels.',
        problem: 'Poor user retention during initial signup due to complex and confusing onboarding forms.',
        action: 'Engineered an intelligent validation and feedback loop for registration workflows.',
        result: 'Increased signup conversion rate by 25% in simulated user-onboarding flows.',
        techStack: ['TypeScript', 'Zod', 'Validation'],
        metrics: { accuracy: 'N/A', impact: 'Auth', speed: 'N/A' },
        githubUrl: 'https://github.com/ayushjhaa1187-spec/sign-up-enhancer',
        featured: false,
        icon: '✍️',
    },
    {
        slug: 'stocksense-hub',
        title: 'StockSense Hub',
        category: 'Web Development',
        shortDescription: 'Hub interface for StockSense agent',
        fullDescription: 'Faced with the need for a command center for StockSense agents, I built this Hub. Overcame real-time data streaming hurdles to visualize agent decisions instantly. This project reflects my ability to build control panels for complex AI systems.',
        problem: 'Difficulty in monitoring and controlling autonomous AI agents in real-time.',
        action: 'Built a real-time monitoring dashboard with WebSocket integration for live agent telemetry.',
        result: 'Provided stakeholders with full transparency and control over autonomous inventory decisions.',
        techStack: ['TypeScript', 'Next.js', 'WebSockets'],
        metrics: { accuracy: 'N/A', impact: 'Frontend', speed: 'N/A' },
        githubUrl: 'https://github.com/ayushjhaa1187-spec/stocksense-hub',
        featured: false,
        icon: '📊',
    },
    {
        slug: 'vendorwatch',
        title: 'VendorWatch',
        category: 'Scripts',
        shortDescription: 'Vendor tracking and watching script',
        fullDescription: 'Faced with unreliable supplier logs, I built VendorWatch using Python. Overcame log inconsistencies by implementing a standardized parser and alert system. This project reflects my ability to build monitoring solutions for supply chain reliability.',
        problem: 'Lack of visibility into third-party vendor performance and log health.',
        action: 'Developed a monitoring script that parses distributed vendor logs and triggers alerts on failure.',
        result: 'Detected 15+ critical vendor sync failures before they impacted retail sales.',
        techStack: ['Python', 'Pandas', 'Alerting'],
        metrics: { accuracy: 'N/A', impact: 'Utility', speed: 'N/A' },
        githubUrl: 'https://github.com/ayushjhaa1187-spec/VendorWatch',
        featured: false,
        icon: '👀',
    }
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
        role: 'Research & Data Science Scholar',
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
        role: 'Data Analyst (Jr) & Frontend Developer',
        company: 'Freelance & Contracting',
        period: '2025 – Present',
        desc: [
            'Working as a Junior Data Analyst focusing on statistical modeling and data visualization.',
            'Serving as a Python Programmer for automation scripts and backend APIs.',
            'Developing full-stack applications and creating UI/UX designs for modern web platforms.',
            'Combining analytical skills with frontend execution to deliver comprehensive software solutions.',
        ],
        color: '#00f0ff',
        icon: '💻',
    },
    {
        role: 'Intern (Multiple Roles)',
        company: 'Yuvaintern & EI System',
        period: '2025',
        desc: [
            'Completed internships gaining practical industry experience in tech and business operations.',
            'Contributed to real-world projects, applying academic knowledge to practical scenarios.',
        ],
        color: '#10B981',
        icon: '💼',
    },
    {
        role: 'Core Member & HR',
        company: 'Spaceborn & Spacelance',
        period: '2025 – Present',
        desc: [
            'Acting as a Core Member at Spacelance, contributing to strategic decisions and organizational growth.',
            'Managing Human Resources (HR) responsibilities, including team building and operational coordination across both organizations.',
        ],
        color: '#8B5CF6',
        icon: '🚀',
    },
    {
        role: 'Campus Ambassador',
        company: 'E-Cell IIT Bombay, IIT Kanpur, IIT Roorkee',
        period: '2025 – 2026',
        desc: [
            'Representing premier Indian Institutes of Technology (Bombay, Kanpur, Roorkee) entrepreneurship cells as a campus ambassador.',
            'Promoting innovation, startups, and technological events within the student community.',
            'Building networks and bridging the gap between national IIT-level events and local student bodies.',
        ],
        color: '#F97316',
        icon: '📣',
    },
    {
        role: 'Entrepreneurship Intern',
        company: 'IREU School for Startups',
        period: 'Startup Ideation Track',
        desc: [
            'Completed intensive entrepreneurship program focusing on problem validation and market-fit analysis.',
            'Developed 3+ business ideas with data-driven market research and customer discovery.',
            'Created business model canvases, financial projections, and go-to-market strategies.',
        ],
        color: '#F97316',
        icon: '📊',
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
        institution: 'International Institute of Information Technology (IIIT) Bhubaneswar',
        degree: 'BTech in Information Technology',
        period: 'Present',
        focusAreas: ['Data Structures & Algorithms', 'Software Engineering', 'System Architecture'],
        coursework: ['Advanced DSA', 'Database Management Systems', 'Computer Networks'],
        color: '#3B82F6',
        description: 'Maintaining an 8.55 GPA. Focusing on core software development, fast backend APIs (FastAPI), and robust IT infrastructure.'
    },
    {
        institution: 'Indian Institute of Technology Madras',
        degree: 'BS in Data Science & Applications',
        period: '2025 – 2029',
        focusAreas: ['Machine Learning & AI', 'Satellite Data Analysis', 'Statistical Modeling', 'Business Applications of DS'],
        coursework: ['ML Foundations', 'Deep Learning', 'Neural Networks', 'Statistical Methods'],
        color: '#1E40AF',
        description: 'Rigorous data science curriculum focusing on mathematical foundations and production-level machine learning.'
    },
    {
        institution: 'Lalit Narayan Mithila University',
        degree: 'B.A. in Economics (Hons.) with Psychology',
        period: 'Present',
        focusAreas: ['Macroeconomics', 'Behavioral Psychology', 'Market Analysis'],
        coursework: ['Economic Theory', 'Statistical Applications in Economics'],
        color: '#8B5CF6',
        description: 'Providing a strong foundation in market dynamics, consumer behavior, and logical economic frameworks.'
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

export const currentlyBuilding = [
    {
        title: 'Insight Weaver Ecosystem Expansion',
        desc: 'Developing specialized agents for automated content verification and cross-repo intelligence syncing.',
        progress: 75,
        tech: ['TypeScript', 'AI Agents'],
    },
    {
        title: 'StockSense Mobile Node',
        desc: 'Building a lightweight mobile interface for pharmacy managers to track inventory health on the go.',
        progress: 40,
        tech: ['React Native', 'FastAPI'],
    },
];

export const githubStats = {
    contributions: '1,500+',
    repositories: '35+',
    stars: '150+',
    pullRequests: '400+',
    mostUsedLanguages: ['Python', 'TypeScript', 'JavaScript'],
};

export const thoughtProcess = [
    {
        step: '01',
        title: 'Deep Problem Immersion',
        desc: 'I don\'t start with code. I start by dismantling the business bottleneck and understanding the user\'s real friction points.',
        icon: '🔍',
    },
    {
        step: '02',
        title: 'Architectural Blueprint',
        desc: 'Designing systems that scale. I choose technologies based on their impact on performance and long-term maintainability.',
        icon: '🏗️',
    },
    {
        step: '03',
        title: 'Rapid Prototyping & Feedback',
        desc: 'Ship the core value fast. I iterate based on real feedback to ensure the final product hits the market need exactly.',
        icon: '⚡',
    },
    {
        step: '04',
        title: 'Refined Execution',
        desc: 'Polishing UX/UI and optimizing performance. A product is only as good as it feels in the user\'s hands.',
        icon: '✨',
    },
];

export const recruiterInfo = {
    status: 'Available for AI/ML Roles & Internships',
    location: 'Delhi, India (Open to Remote)',
    resumeUrl: '/resume.pdf',
    calendly: 'https://calendly.com/ayushkumarjha',
    quickContact: [
        { platform: 'Twitter', link: 'https://x.com/ayushjhaa1187' },
        { platform: 'LinkedIn', link: 'https://www.linkedin.com/in/ayush-kumar-jha-5960a3362/' },
    ],
};
