import { Research } from '@/lib/schemas';

export const researchAreas: Research[] = [
  {
    title: 'Machine Learning for Satellite Data',
    desc: 'Investigating advanced CNN architectures for processing multi-spectral satellite imagery to detect environmental changes.',
    icon: '🛰️',
    current: true,
    methodologies: ['CNN', 'Multi-spectral Analysis', 'PyTorch']
  },
  {
    title: 'AI in Architecture & Urban Planning',
    desc: 'Researching generative models for optimizing building layouts and sustainable urban development patterns.',
    icon: '🏙️',
    current: true,
    methodologies: ['Generative AI', 'Optimization Algorithms']
  }
];
