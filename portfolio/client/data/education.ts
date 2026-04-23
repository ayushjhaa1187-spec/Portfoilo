import { Education } from '@/lib/schemas';

export const education: Education[] = [
  {
    institution: 'Indian Institute of Technology Madras',
    degree: 'BS in Data Science & Applications',
    period: '2025 - 2029',
    focus: [
      'Machine Learning & AI',
      'Satellite Data Analysis',
      'Statistical Modeling',
      'Business Applications of DS'
    ],
    coursework: ['ML Foundations', 'Deep Learning', 'Neural Networks', 'Statistical Methods', 'Data Structures', 'Business Analytics'],
    color: 'blue'
  },
  {
    institution: 'IREU School for Startups',
    degree: 'Entrepreneurship Intern (Startup Ideation Track)',
    period: '2025',
    focus: [
      'Market Analysis',
      'Startup Ideation',
      'Data-Driven Business Research'
    ],
    color: 'orange'
  }
];
