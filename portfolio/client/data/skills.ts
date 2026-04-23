import { Skill } from '@/lib/schemas';

export const skills: Skill[] = [
  {
    category: 'Machine Learning & AI',
    items: [
      { name: 'Supervised Learning', proficiency: 85 },
      { name: 'Deep Learning', proficiency: 75 },
      { name: 'Computer Vision', proficiency: 80 },
      { name: 'Satellite Data Analysis', proficiency: 75 },
      { name: 'Statistical Modeling', proficiency: 85 },
      { name: 'NLP', proficiency: 65 },
    ],
  },
  {
    category: 'Programming & Tools',
    items: [
      { name: 'Python', proficiency: 90 },
      { name: 'NumPy, Pandas', proficiency: 85 },
      { name: 'TensorFlow, PyTorch', proficiency: 75 },
      { name: 'Scikit-learn', proficiency: 85 },
      { name: 'Jupyter, Colab', proficiency: 90 },
      { name: 'SQL', proficiency: 80 },
    ],
  },
  {
    category: 'Business & Strategy',
    items: [
      { name: 'Startup Ideation', proficiency: 85 },
      { name: 'Market Analysis', proficiency: 75 },
      { name: 'Product Strategy', proficiency: 70 },
      { name: 'Business Modeling', proficiency: 80 },
    ],
  }
];
